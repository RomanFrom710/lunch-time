import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { AuthService, User, UserMenuService, UserMenuItem } from '../';


@Component({
    selector: 'lt-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.less']
})
export class HeaderComponent {
    private currentUser: Observable<User>;

    constructor(private authService: AuthService,
                private userMenuService: UserMenuService) {
        this.currentUser = this.authService.currentUser;
    }

    get menuItems() : UserMenuItem[] {
        return this.userMenuService.menuItems;
    }

    logout(): void {
        this.authService.logout();
    }
}
