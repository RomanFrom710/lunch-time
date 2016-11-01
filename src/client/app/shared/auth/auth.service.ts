import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { WindowService, Config } from '../';
import { User, UserStore } from './';


@Injectable()
export class AuthService {

    constructor(private windowService: WindowService,
                private http: Http,
                private userStore: UserStore,
                private config: Config) {
        this.checkAuth();
    }

    get currentUser() {
        return this.userStore.getUser();
    }

    authVk(): Promise<User> {
        return this.windowService
            .openTempWindow(this.config.auth.links.vk.auth, this.config.auth.authEventName)
            .then(() => this.checkAuth());
    }

    logout(): Promise<boolean> {
        return this.http.post(this.config.auth.links.logout, {})
            .toPromise()
            .then(data => {
                if (data) {
                    this.userStore.resetUser();
                }
                return !!data
            });
    }

    private checkAuth(): Promise<User> {
        return this.http.get(this.config.auth.links.info)
            .map(response => response.json())
            .toPromise()
            .then(user => {
                const typedUser : User = (new User()).fromData(user);
                this.userStore.setUser(typedUser);
                return typedUser;
            });
    }
}
