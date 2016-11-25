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
    private currentPlace: Point = null;

    constructor(private userService: UserService,
                private authService: AuthService) {
        //this.currentUser = this.authService.currentUser;
        //this.currentUser.subscribe(newUser => this.currentPlace = newUser.place);
    }

    updatePlace(): void {
        this.userService.updatePlace(this.currentPlace);
    }
}
