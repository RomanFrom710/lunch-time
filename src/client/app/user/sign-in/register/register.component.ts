import { Component } from '@angular/core';

import { User, AuthService } from '../../';


@Component({
    selector: 'lt-register',
    templateUrl: 'register.component.html'
})
export class RegisterComponent {
    private user: User = new User();
    private passwordConfirm: string = '';

    constructor(private authService: AuthService) { }

    register(): void {
        this.authService.registerLocalUser(this.user);
    }
}
