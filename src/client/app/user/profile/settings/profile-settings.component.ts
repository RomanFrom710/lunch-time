import { Component } from '@angular/core';

import {
    UserService,
    User,
    AuthService,
    SocialAuthTypesService,
    SocialAuth
} from '../../';
import { Point } from '../../../shared';


@Component({
    selector: 'lt-profile-settings',
    templateUrl: 'profile-settings.component.html',
    styleUrls: ['profile-settings.component.less']
})
export class ProfileSettingsComponent {
    private isEditMode = false;
    private socialAuth: SocialAuth;

    private currentUser: User; // Template is bound to this user
    private originalUser: User; // Saved for reset feature

    private currentPlace: Point;

    constructor(private userService: UserService,
                private socialAuthService: SocialAuthTypesService,
                private authService: AuthService) {
        this.authService.currentUser.subscribe(newUser => {
            this.currentUser = newUser;
            this.originalUser = newUser;
            this.currentPlace = this.currentPlace || newUser.place;
            this.socialAuth = this.socialAuthService.findType(newUser.authType);
        });
    }

    updatePlace(): void {
        this.userService.updatePlace(this.currentPlace).subscribe();
    }

    resetPlace(): void {
        this.currentPlace = this.currentUser.place;
    }

    updateProfile(): void {
        this.userService.updateProfile(this.currentUser)
            .subscribe(() => this.isEditMode = false);
    }

    resetProfile(): void {
        this.currentUser.fromData(this.originalUser);
        this.isEditMode = false;
    }

    updateFromSource(): void {
        // todo
    }
}
