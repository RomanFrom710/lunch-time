import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';

import { User, UserType, AuthService } from '../';


@Injectable()
export class AuthGuard implements CanActivate {
    private currentUser: User;

    constructor(private authService: AuthService,
                private router: Router) {
        authService.currentUser.subscribe(newUser => this.currentUser = newUser);
    }

    canActivate(route: ActivatedRouteSnapshot): boolean {
        const hasAccess = this.checkAuth(route);
        if (!hasAccess) {
            this.router.navigate(['/']);
        }

        return hasAccess;
    }

    private checkAuth(route: ActivatedRouteSnapshot): boolean {
        const routeRoles = route.data['roles'] as Array<UserType>;
        if (!routeRoles) {
            return true;
        }

        if (!this.currentUser) {
            return routeRoles.indexOf(UserType.Anon) !== -1;
        }

        return routeRoles.indexOf(this.currentUser.userType) !== -1;
    }
}
