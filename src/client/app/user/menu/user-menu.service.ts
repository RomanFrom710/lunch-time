import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { UserMenuItem } from './';
import { AuthService, User } from '../shared';


@Injectable()
export class UserMenuService {
    private currentUser: User;

    private adminOnlyItems : UserMenuItem[] = [
        new UserMenuItem('Админ', 'admin')
    ];
    private spotOwnerOnlyItems : UserMenuItem[] = [];
    private commonItems : UserMenuItem[] = [
        new UserMenuItem('Профиль', 'profile'),
        new UserMenuItem('Выйти', null, () => this.authService.logout())
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
