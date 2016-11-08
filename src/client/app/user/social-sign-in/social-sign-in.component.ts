import { Component } from '@angular/core';

import { AuthService } from '../../shared';


@Component({
    selector: 'lt-social-sign-in',
    templateUrl: 'social-sign-in.component.html',
    styleUrls: ['social-sign-in.component.less']
})
export class SocialSignInComponent {
    constructor(private authSerivce: AuthService) {}

    authVk(): void {
        this.authSerivce.authVk();
    }
}
