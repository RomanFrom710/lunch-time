import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

import { Cafe } from '../';
import { Config } from '../../../shared';


@Injectable()
export class CafeService {
    constructor(private http: Http,
                private config: Config) { }

    getCoords(): Observable<Cafe[]> {
        return this.http.get(this.config.links.cafe.coords)
            .map(response => response.json());
    }

    addCafe(cafe: Cafe): Observable<boolean> {
        return this.http.post(this.config.links.cafe.add, cafe)
            .map(response => response.json());
    }
}
