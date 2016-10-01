import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { WindowService, Config } from '../';
import { User } from './';


@Injectable()
export class AuthService {
    private localStorageKey: string = 'lt-current-user';

    constructor(private windowService: WindowService,
                private http: Http,
                private config: Config) {}

    authVk(): Promise<User> {
        return this.windowService
            .openTempWindow(this.config.auth.links.vk.auth, this.config.auth.authEventName)
            .then(() => this.checkAuth());
    }

    logout(): Promise<boolean> {
        return this.http.post(this.config.auth.links.logout, {})
            .toPromise()
            .then((data) => {
                console.log(data); // todo: handle errors (maybe better to do it globally)
                return !!data;
            });
    }

    private checkAuth(): Promise<User> {
        return this.http.get(this.config.auth.links.info)
            .map(response => response.json())
            .toPromise()
            .then(user => {
                console.log(user);
                this.windowService.setStorageValue(this.localStorageKey, user);
                return user;
            })
    }
}
