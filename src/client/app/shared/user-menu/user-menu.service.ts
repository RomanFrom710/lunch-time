import { Injectable } from '@angular/core';

import { UserMenuItem } from './';
import { AuthService, User, UserType } from '../';


@Injectable()
export class UserMenuService {
    private currentUser: User;

    private adminOnlyItems : UserMenuItem[] = [];
    private spotOwnerOnlyItems : UserMenuItem[] = [];
    private commonItems : UserMenuItem[] = [
        new UserMenuItem('Logout', () => this.authService.logout())
    ];

    constructor(private authService: AuthService) {
        this.authService.currentUser.subscribe(user => {
            this.currentUser = user;
        });
    }

    get menuItems() : UserMenuItem[] {
        let routes = this.commonItems;

        if (this.isSpotOwner()) {
            routes = this.spotOwnerOnlyItems.concat(routes);
        }

        if (this.isAdmin()) {
            routes = this.adminOnlyItems.concat(routes);
        }

        return routes;
    }

    private isAdmin() : boolean {
        return this.currentUser.userType === UserType.Admin;
    }

    private isSpotOwner() : boolean {
        return this.currentUser.userType === UserType.SpotOwner;
    }
}
