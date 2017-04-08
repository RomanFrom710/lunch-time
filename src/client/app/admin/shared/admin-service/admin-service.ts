import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

import { Config } from '../../../shared';
import { UserType } from '../../../user';


@Injectable()
export class AdminService {
    constructor(private config: Config,
                private http: Http) { }

    addOffer(userType: UserType): Observable<string> {
        return this.http.post(this.config.links.security.addOffer, { userType })
            .map(response => response.json());
    }
}
