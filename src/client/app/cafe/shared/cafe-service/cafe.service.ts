import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Cafe } from '../';
import { Config } from '../../../shared';


@Injectable()
export class CafeService {
    constructor(private http: Http,
                private config: Config) { }

    addCafe(cafe: Cafe): Promise<boolean> {
        return this.http.post(this.config.links.cafe.add, cafe)
            .map(response => response.json())
            .toPromise();
    }
}
