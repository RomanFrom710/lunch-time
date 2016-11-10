import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { WindowService } from '../../';
import { User } from '../';


// This class is internal for shared module
@Injectable()
export class UserStore {
    private localStorageKey: string = 'lt-current-user';
    private user: BehaviorSubject<User> = new BehaviorSubject<User>(null);

    constructor(private windowService: WindowService) {
        const rawUser = this.windowService.getStorageValue(this.localStorageKey);
        if (rawUser) {
            const user = (new User()).fromData(this.windowService.getStorageValue(this.localStorageKey));
            this.setUser(user);
        }
    }

    getUser() : Observable<User> {
        return this.user.asObservable();
    }

    setUser(user: User) : void {
        this.windowService.setStorageValue(this.localStorageKey, user);
        this.user.next(user);
    }

    resetUser() : void {
        this.windowService.setStorageValue(this.localStorageKey, null);
        this.user.next(null);
    }
}
