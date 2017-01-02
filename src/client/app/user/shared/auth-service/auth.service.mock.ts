import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { WindowService } from '../../../shared';
import { User, vkMockUser } from '../../shared';


@Injectable()
export class MockAuthService {
    private localStorageKey: string = 'lt-current-user';

    constructor(private windowService: WindowService) {}

    authVk(): Observable<User> {
        this.windowService.setStorageValue(this.localStorageKey, vkMockUser);
        return Observable.of(vkMockUser);
    }

    logout(): Observable<boolean> {
        this.windowService.setStorageValue(this.localStorageKey, null);
        return Observable.of(true);
    }
}
