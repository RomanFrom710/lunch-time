import { Directive, HostBinding, HostListener } from '@angular/core';


@Directive({ selector: '[ltEmptyLink]' })
export class EmptyLinkDirective {
    @HostBinding('attr.href') href: string = '';

    @HostListener('click', ['$event']) onClick(event: MouseEvent) {
        event.preventDefault();
    }
}
