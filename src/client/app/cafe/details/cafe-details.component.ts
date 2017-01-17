import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ImageResult } from 'ng2-imageupload';

import { CafeService, Cafe } from '../';


// todo: Add validation for this component
@Component({
    selector: 'lt-cafe-details',
    templateUrl: 'cafe-details.component.html',
    styleUrls: ['cafe-details.component.less']
})
export class CafeDetailsComponent {
    @Input() isEditMode: boolean = false;
    @Input() cafe: Cafe = null;
    @Output() cafeChange: EventEmitter<Cafe> = new EventEmitter<Cafe>();

    private imageSrc: string;

    constructor(private cafeService: CafeService) { }

    private selected(imageResult: ImageResult): void {
        this.imageSrc = imageResult.dataURL;
    }
}
