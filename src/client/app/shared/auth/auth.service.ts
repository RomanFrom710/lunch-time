import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BehaviorSubject } from 'rxjs';

import { WindowService, Config } from '../';
import { User } from './';


@Injectable()
export class AuthService {
    private localStorageKey: string = 'lt-current-user';
    private user: BehaviorSubject<User> = new BehaviorSubject<User>(null);

    constructor(private windowService: WindowService,
                private http: Http,
                private config: Config) {
        this.checkAuth();
    }

    get currentUser() {
        return this.user.asObservable();
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
                    this.windowService.setStorageValue(this.localStorageKey, null);
                }
                return !!data
            });
    }

    private checkAuth(): Promise<User> {
        return this.http.get(this.config.auth.links.info)
            .map(response => {console.log(response);return response ? (new User()).fromData(response.json()) : null})
            .toPromise()
            .then(user => {
                console.log(user);
                this.windowService.setStorageValue(this.localStorageKey, user);
                this.user.next(user);
                return user;
            });
    }
}
