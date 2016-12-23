import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { SocialAuth, SocialAuthTypesService } from '../';
import { AuthService } from '../../';


@Component({
    selector: 'lt-sign-in-screen',
    templateUrl: 'sign-in-screen.component.html',
    styleUrls: ['sign-in-screen.component.less']
})
export class SignInScreenComponent {
    private socialAuthTypes: SocialAuth[] = this.socialAuthTypesService.types;

    constructor(private authService: AuthService,
                private socialAuthTypesService: SocialAuthTypesService,
                private router: Router) {
        authService.currentUser.subscribe(newUser => {
            if (newUser) {
                router.navigate(['/']);
            }
        });
    }
}
