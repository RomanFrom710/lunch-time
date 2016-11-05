import { Directive, HostBinding, HostListener } from '@angular/core';


@Directive({ selector: '[ltEmptyLink]' })
export class EmptyLink {
    @HostBinding('attr.href') href = '';

    @HostListener('click', ['$event']) onClick(event) {
        event.preventDefault();
    }
}
