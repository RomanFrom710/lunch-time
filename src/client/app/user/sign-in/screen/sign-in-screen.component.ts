import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { SocialAuth, SocialAuthTypesService } from '../';
import { AuthService } from '../../';


@Component({
    selector: 'lt-sign-in-screen',
    templateUrl: 'sign-in-screen.component.html',
    styleUrls: ['sign-in-screen.component.less']
})
export class SignInScreenComponent implements OnDestroy {
    private socialAuthTypes: SocialAuth[] = this.socialAuthTypesService.types;
    private currentUserSubscription: Subscription;

    constructor(private authService: AuthService,
                private socialAuthTypesService: SocialAuthTypesService,
                private router: Router) {
        this.currentUserSubscription = authService.currentUser.subscribe(newUser => {
            if (newUser) {
                router.navigate(['/']);
            }
        });
    }

    ngOnDestroy(): void {
        this.currentUserSubscription.unsubscribe();
    }
}
