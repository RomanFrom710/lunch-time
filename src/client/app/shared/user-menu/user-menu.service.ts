import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { UserMenuItem } from './';
import { AuthService, User, UserType } from '../';


@Injectable()
export class UserMenuService {
    private currentUser: User;

    private adminOnlyItems : UserMenuItem[] = [
        new UserMenuItem('Admin', 'admin')
    ];
    private spotOwnerOnlyItems : UserMenuItem[] = [];
    private commonItems : UserMenuItem[] = [
        new UserMenuItem('Logout', null, () => this.authService.logout())
    ];

    constructor(private authService: AuthService,
                private router: Router) {
        this.authService.currentUser.subscribe(user => {
            this.currentUser = user;
        });
    }

    get menuItems() : UserMenuItem[] {
        let routes = this.commonItems;

        if (this.currentUser.isSpotOwner) {
            routes = this.spotOwnerOnlyItems.concat(routes);
        }

        if (this.currentUser.isAdmin) {
            routes = this.adminOnlyItems.concat(routes);
        }

        return routes;
    }
}
