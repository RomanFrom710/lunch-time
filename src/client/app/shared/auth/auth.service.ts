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
        const currentUser = this.windowService.getStorageValue(this.localStorageKey);
        console.log(currentUser.fullName);
        this.user.next(currentUser);
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
            .map(response => response.json())
            .toPromise()
            .then(user => {
                this.windowService.setStorageValue(this.localStorageKey, user);
                this.user.next(user);
                return user;
            });
    }
}
