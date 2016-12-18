import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Config, Point } from '../../../shared';
import { UserStore } from '../../store';
import { User } from '../';


@Injectable()
export class UserService {
    constructor(private config: Config,
                private http: Http,
                private userStore: UserStore) { }

    updatePlace(point: Point): Promise<Point> {
        return this.http.put(this.config.links.user.selfUpdate, { place: point })
            .map(response => {
                const user: User = response.json();
                this.userStore.updateUser({ place: user.place });
                return new Point(user.place.latitude, user.place.longitude);
            })
            .toPromise();
    }

    updateProfile(user: User): Promise<User> {
        return this.http.put(this.config.links.user.selfUpdate, user)
            .map(response => {
                const newUser = (new User()).fromData(response.json());
                this.userStore.setUser(newUser);
                return newUser;
            })
            .toPromise();
    }
}
