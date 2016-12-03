import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import {
    AuthService,
    SocialAuth,
    SocialAuthTypesService,
    User,
    UserMenuService,
    UserMenuItem
} from '../../user';


@Component({
    selector: 'lt-header',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.less']
})
export class HeaderComponent {
    private currentUser: Observable<User> = this.authService.currentUser;
    private socialAuthTypes: SocialAuth[] = this.socialAuthTypesService.types;

    constructor(private authService: AuthService,
                private socialAuthTypesService: SocialAuthTypesService,
                private userMenuService: UserMenuService) { }

    get menuItems() : UserMenuItem[] {
        return this.userMenuService.menuItems;
    }

    logout(): void {
        this.authService.logout();
    }
}
