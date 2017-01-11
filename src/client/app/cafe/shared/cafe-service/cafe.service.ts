import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs';

import { Cafe, CafeQuery } from '../';
import { Config, PaginationResult } from '../../../shared';


@Injectable()
export class CafeService {
    constructor(private http: Http,
                private config: Config) { }

    getCoords(): Observable<Cafe[]> {
        return this.http.get(this.config.links.cafe.coords)
            .map(response => response.json());
    }

    getAll(query: CafeQuery): Observable<PaginationResult<Cafe>> {
        const params = new URLSearchParams();
        params.set('page', query.page.toString());
        params.set('itemsPerPage', query.itemsPerPage.toString());

        return this.http.get(this.config.links.cafe.getAll, { search: params })
            .map(response => response.json());
    }

    addCafe(cafe: Cafe): Observable<boolean> {
        return this.http.post(this.config.links.cafe.add, cafe)
            .map(response => response.json());
    }
}
