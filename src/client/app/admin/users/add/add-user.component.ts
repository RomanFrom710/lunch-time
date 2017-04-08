import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { AdminService } from '../../';
import { UserType } from '../../../user';


@Component({
    selector: 'lt-add-user',
    templateUrl: 'add-user.component.html'
})
export class AddUserComponent {
    private UserTypeEnum = UserType;
    private userType: UserType = UserType.User;
    private registerLink: Observable<string>;

    constructor(private adminService: AdminService) { }

    addUser(): void {
        this.registerLink = this.adminService.addOffer(this.userType);
    }
}
