import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { AuthService, Config, Point } from '../../shared';


@Injectable()
export class UserService {
    constructor(private config: Config,
                private http: Http,
                private authSerivce: AuthService) { }

    public updatePlace(point: Point) : void {
        this.http.post(this.config.links.user.profile.updatePlace, point)
            .toPromise()
            .then(this.authSerivce.checkAuth.bind(this.authSerivce));
    }
}
