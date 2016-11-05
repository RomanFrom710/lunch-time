import { Injectable } from '@angular/core';

import { WindowService } from '../';
import { User, vkMockUser } from './';


@Injectable()
export class MockAuthService {
    private localStorageKey: string = 'lt-current-user';

    constructor(private windowService: WindowService) {}

    authVk(): Promise<User> {
        this.windowService.setStorageValue(this.localStorageKey, vkMockUser);
        return Promise.resolve<User>(vkMockUser);
    }

    logout(): Promise<boolean> {
        this.windowService.setStorageValue(this.localStorageKey, null);
        return Promise.resolve<boolean>(true);
    }
}