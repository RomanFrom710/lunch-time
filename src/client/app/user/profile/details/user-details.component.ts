import { Component, Input, Output, EventEmitter } from '@angular/core';

import { User } from '../../../shared';
import { UserService } from '../../';

// todo: Add validation for this component
@Component({
    selector: 'lt-user-details',
    templateUrl: 'user-details.component.html'
})
export class UserDetailsComponent {
    @Input() isEditMode: boolean = false;
    @Input() user: User = null;
    @Output() userChange: EventEmitter<User> = new EventEmitter<User>();

    constructor(private userService: UserService) { }
}
