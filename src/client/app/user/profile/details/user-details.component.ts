import { Component, Input, Output, EventEmitter } from '@angular/core';

import { User, Gender } from '../../';


// todo: Add validation for this component
@Component({
    selector: 'lt-user-details',
    templateUrl: 'user-details.component.html'
})
export class UserDetailsComponent {
    @Input() isEditMode: boolean = false;
    @Input() user: User = null;
    @Output() userChange: EventEmitter<User> = new EventEmitter<User>();

    private GenderEnum = Gender;

    constructor() { }
}
