import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ToastsManager } from 'ng2-toastr';

import { Config } from '../../shared';


@Injectable()
export class RegisterGuard implements CanActivate {
    constructor(private http: Http,
                private config: Config,
                private toastr: ToastsManager,
                private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
        const verifyLink = this.config.links.security.verifyToken.replace(':token', route.params['token']);

        return this.http.get(verifyLink).map(response => {
            const isValidToken = !!response.text();

            if (!isValidToken) {
                this.toastr.error('Неверный верификационный код');
                this.router.navigate(['/']);
            }

            return isValidToken;
        });
    }
}
