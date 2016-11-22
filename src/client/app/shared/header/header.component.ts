import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import {
    AuthService,
    SocialAuth,
    SocialAuthTypesService,
    User,
    UserMenuService,
    UserMenuItem
} from '../';


@Component({
    selector: 'lt-header',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.less']
})
export class HeaderComponent {
    private currentUser: Observable<User>;
    private socialAuthTypes: SocialAuth[];

    constructor(private authService: AuthService,
                private socialAuthTypesService: SocialAuthTypesService,
                private userMenuService: UserMenuService) {
        this.currentUser = this.authService.currentUser;
        this.socialAuthTypes = this.socialAuthTypesService.types;
    }

    get menuItems() : UserMenuItem[] {
        return this.userMenuService.menuItems;
    }

    logout(): void {
        this.authService.logout();
    }
}
