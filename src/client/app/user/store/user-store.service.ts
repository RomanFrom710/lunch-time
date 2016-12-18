import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { WindowService } from '../../shared';
import { User } from '../';


// This class is internal for the user module
@Injectable()
export class UserStore {
    private localStorageKey: string = 'lt-current-user';
    private user: BehaviorSubject<User> = new BehaviorSubject<User>(null);

    constructor(private windowService: WindowService) {
        const user = this.windowService.getStorageValue(this.localStorageKey);
        if (user) {
            this.setUser(user);
        }
    }

    getUser(): Observable<User> {
        return this.user.asObservable();
    }

    setUser(user: User): void {
        this.windowService.setStorageValue(this.localStorageKey, user);
        this.user.next((new User()).fromData(user));
    }

    updateUser(userDto: any): void {
        const newUser = this.user.getValue().fromData(userDto);
        this.setUser(newUser);
    }

    resetUser(): void {
        this.windowService.setStorageValue(this.localStorageKey, null);
        this.user.next(null);
    }
}
