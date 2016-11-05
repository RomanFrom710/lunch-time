import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { AuthService, User } from '../';


@Component({
    selector: 'lt-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.less']
})
export class HeaderComponent {
    private currentUser: Observable<User>;

    constructor(private authService: AuthService) {
        this.currentUser = this.authService.currentUser;
    }

    logout(): void {
        this.authService.logout();
    }
}
