import { Component, Input, Output, EventEmitter } from '@angular/core';

import { CafeService } from '../';


// todo: Add validation for this component
@Component({
    selector: 'lt-cafe-details',
    templateUrl: 'cafe-details.component.html'
})
export class CafeDetailsComponent {
    @Input() isEditMode: boolean = false;
    //@Input() cafe: Cafe = null;
    //@Output() cafeChange: EventEmitter<Cafe> = new EventEmitter<Cafe>();

    constructor(private cafeService: CafeService) { }
}
