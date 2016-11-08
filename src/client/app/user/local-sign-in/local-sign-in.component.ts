import { Component } from '@angular/core';

import { AuthService } from '../../shared';


@Component({
    selector: 'lt-local-sign-in',
    templateUrl: 'local-sign-in.component.html'
})
export class LocalSignInComponent {
    username: string;
    password: string;

    constructor(private authSerivce: AuthService) { }

    login(): void {
        this.authSerivce.authLocal(this.username, this.password);
    }
}
