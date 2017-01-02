import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { WindowService, Config } from '../../../shared';
import { UserStore } from '../../store';
import { User } from '../../';


@Injectable()
export class AuthService {
    constructor(private windowService: WindowService,
                private http: Http,
                private router: Router,
                private userStore: UserStore,
                private config: Config) {
        this.checkAuth();
    }

    get currentUser() : Observable<User> {
        return this.userStore.getUser();
    }

    authVk(): void {
        this.windowService
            .openTempWindow(this.config.links.auth.vk.auth, this.config.auth.authEventName)
            .subscribe(this.checkAuth.bind(this));
    }

    authLocal(username: string, password: string): void {
        this.http.post(this.config.links.auth.local.auth,
                              { username: username, password: password })
            .map(response => response.json())
            .subscribe(this.saveUser.bind(this));
    }

    logout(): void {
        this.http.post(this.config.links.auth.logout, {})
            .subscribe(data => {
                if (data) {
                    this.router.navigate(['/'])
                        .then(this.userStore.resetUser.bind(this.userStore));
                }
            });
    }

    checkAuth(): void {
        this.http.get(this.config.links.auth.info)
            .map(response => response.json())
            .toPromise()
            .then(this.saveUser.bind(this))
            .catch(() => {}); // It's just a check, nothing serious...
    }

    private saveUser(user) : User {
        const typedUser : User = (new User()).fromData(user);
        this.userStore.setUser(typedUser);
        return typedUser;
    }
}
