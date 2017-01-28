import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';

import { Cafe, CafeService } from '../';


@Component({
    selector: 'lt-cafe-modal',
    templateUrl: 'cafe-modal.component.html'
})
export class CafeModalComponent {
    private cafe: Observable<Cafe>;

    constructor(cafeService: CafeService,
                route: ActivatedRoute) {
        route.params.subscribe((params: Params) => {
            this.cafe = cafeService.getById(params['id']).share();
        });
    }
}
