import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { UserService } from '../';
import { Point, User, AuthService } from '../../shared';


@Component({
    selector: 'lt-profile-settings',
    templateUrl: 'profile-settings.component.html',
    styleUrls: ['profile-settings.component.less']
})
export class ProfileSettingsComponent {
    private currentUser: Observable<User> = this.authService.currentUser;
    //private currentPlace: Point = this.currentUser. todo: bind to current user property

    constructor(private userService: UserService,
                private authService: AuthService) { }

    updatePlace(): void {

    }
}
