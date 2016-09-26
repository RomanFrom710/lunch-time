import { Injectable } from '@angular/core';

import { WindowService, Config } from '../';

@Injectable()
export class AuthService {
    constructor(private windowService: WindowService,
                private config: Config) {}

    authVk(): void {
        this.windowService.openTempWindow(this.config.links.vk.auth, this.config.authEventName)
            .then(this.checkAuth);
    }

    private checkAuth(): void {

    }
}
