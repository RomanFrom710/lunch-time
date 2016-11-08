import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { WindowService, Config } from '../';
import { User, UserStore } from './';


@Injectable()
export class AuthService {

    constructor(private windowService: WindowService,
                private http: Http,
                private userStore: UserStore,
                private config: Config) { }

    get currentUser() {
        return this.userStore.getUser();
    }

    authVk(): Promise<User> {
        return this.windowService
            .openTempWindow(this.config.links.auth.vk.auth, this.config.auth.authEventName)
            .then(() => this.checkAuth());
    }

    authLocal(username: string, password: string): Promise<User> {
        return this.http.post(this.config.links.auth.local.auth,
                              { username: username, password: password })
            .map(response => response.json())
            .toPromise()
            .then(this.saveUser);
    }

    logout(): Promise<boolean> {
        return this.http.post(this.config.links.auth.logout, {})
            .toPromise()
            .then(data => {
                if (data) {
                    this.userStore.resetUser();
                }
                return !!data
            });
    }

    private checkAuth(): Promise<User> {
        return this.http.get(this.config.links.auth.info)
            .map(response => response.json())
            .toPromise()
            .then(this.saveUser);
    }

    private saveUser(user) : User {
        const typedUser : User = (new User()).fromData(user);
        this.userStore.setUser(typedUser);
        return typedUser;
    }
}
