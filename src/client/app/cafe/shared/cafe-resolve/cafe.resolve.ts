import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { Cafe, CafeService } from '../';


@Injectable()
export class CafeResolve implements Resolve<Cafe> {
    constructor(private cafeService: CafeService) { }

    resolve(route: ActivatedRouteSnapshot): Observable<Cafe> {
        const id = route.params['id'];
        return this.cafeService.getById(id);
    }
}
