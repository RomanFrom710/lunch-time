import {
    Component,
    Input,
    Output,
    EventEmitter,
    ViewChild
} from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

import { Cafe } from '../';


@Component({
    selector: 'lt-cafe-details',
    templateUrl: 'cafe-details.component.html',
    styleUrls: ['cafe-details.component.less']
})
export class CafeDetailsComponent {
    @Input() isEditMode: boolean = false;
    @Input() cafe: Cafe = null;
    @Output() cafeChange: EventEmitter<Cafe> = new EventEmitter<Cafe>();

    @ViewChild('form') private form: NgForm;

    private isValidated: boolean = false;

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
}
