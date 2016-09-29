import { Component } from '@angular/core';

import { AuthService } from '../../shared';


@Component({
    selector: 'lt-sign-in',
    templateUrl: './sign-in.component.html',
    styleUrls: ['./sign-in.component.less']
})
export class SignInComponent {
    constructor(private authSerivce: AuthService) {}

    authVk(): void {
        this.authSerivce.authVk();
    }
}
