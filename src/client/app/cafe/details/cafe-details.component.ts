import {
    Component,
    Input,
    Output,
    EventEmitter,
    ViewChild
} from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { ImageResult } from 'ng2-imageupload';

import { CafeService, Cafe } from '../';


@Component({
    selector: 'lt-cafe-details',
    templateUrl: 'cafe-details.component.html',
    styleUrls: ['cafe-details.component.less']
})
export class CafeDetailsComponent {
    @Input() isEditMode: boolean = false;
    @Input() cafe: Cafe = null;
    @Input() onSubmit: () => void;
    @Output() cafeChange: EventEmitter<Cafe> = new EventEmitter<Cafe>();

    @ViewChild('form') private form: NgForm;
    private imageSrc: string;
    private isValidated: boolean = false;

    constructor(private cafeService: CafeService) { }

    validate(): boolean {
        if (!this.isEditMode) {
            return null;
        }

        this.isValidated = true;
        return this.form.valid;
    }

    private hasError(field: NgModel) {
        return field.errors && (this.isValidated || field.touched || field.dirty);
    }

    private imageSelected(imageResult: ImageResult): void {
        this.imageSrc = imageResult.dataURL;
    }
}
