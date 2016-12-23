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

    authVk(): Promise<User> {
        return this.windowService
            .openTempWindow(this.config.links.auth.vk.auth, this.config.auth.authEventName)
            .then(this.checkAuth.bind(this));
    }

    authLocal(username: string, password: string): Promise<User> {
        return this.http.post(this.config.links.auth.local.auth,
                              { username: username, password: password })
            .map(response => response.json())
            .toPromise()
            .then(this.saveUser.bind(this));
    }

    logout(): Promise<boolean> {
        return this.http.post(this.config.links.auth.logout, {})
            .toPromise()
            .then(data => {
                if (data) {
                    this.router.navigate(['/']);
                    this.userStore.resetUser();
                }
                return !!data
            });
    }

    checkAuth(): Promise<User> {
        return this.http.get(this.config.links.auth.info)
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
