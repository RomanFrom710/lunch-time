import {
    Directive,
    HostBinding,
    HostListener,
    Input,
    OnChanges
} from '@angular/core';


@Directive({ selector: '[ltDefaultImage]' })
export class DefaultImageDirective implements OnChanges{
    @HostBinding('attr.src')
    @Input()
    src: string;

    @Input('ltDefaultImage')
    defaultSrc: string;

    // Webpack needs context for dynamic requires.
    private imagesContext: __WebpackModuleApi.RequireContext = require.context('assets', true, /\.(png|jpg|jpeg)$/);

    ngOnChanges(): void {
        if (!this.src) {
            this.setDefaultImage();
        }
    }

    @HostListener('error', ['$event']) onError(event: ErrorEvent) {
        this.setDefaultImage();
        event.preventDefault();
    }

    private setDefaultImage(): void {
        this.src = this.imagesContext(this.defaultSrc).toString();
    }
}
