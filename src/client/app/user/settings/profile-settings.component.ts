import { Component } from '@angular/core';

import { UserService } from '../';
import { Point, User, AuthService } from '../../shared';


@Component({
    selector: 'lt-profile-settings',
    templateUrl: 'profile-settings.component.html',
    styleUrls: ['profile-settings.component.less']
})
export class ProfileSettingsComponent {
    private currentUser: User;
    private currentPlace: Point = null;

    constructor(private userService: UserService,
                private authService: AuthService) {
        this.authService.currentUser.subscribe(newUser => {
            this.currentUser = newUser;
            this.currentPlace = newUser.place;
        });
    }

    updatePlace(): void {
        this.userService.updatePlace(this.currentPlace);
    }

    resetPoint(): void {
        this.currentPlace = this.currentUser.place;
    }
}
