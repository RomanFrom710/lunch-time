import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { WindowService, Config } from '../';

@Injectable()
export class AuthService {
    private localStorageKey: string = 'lt-current-user';

    constructor(private windowService: WindowService,
                private http: Http,
                private config: Config) {}

    authVk(): void {
        this.windowService
            .openTempWindow(this.config.auth.links.vk.auth, this.config.auth.authEventName)
            .then(() => this.checkAuth());
    }

    private checkAuth(): void {
        this.http.get('/auth')
            .map(response => response.json())
            .toPromise()
            .then(data => {
                console.log(data);
                this.windowService.setStorageValue(this.localStorageKey, data);
            })
    }
}
