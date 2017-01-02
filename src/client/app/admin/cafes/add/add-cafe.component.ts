import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Cafe, CafeService } from '../../../cafe';


@Component({
    selector: 'lt-add-cafe',
    templateUrl: 'add-cafe.component.html'
})
export class AddCafeComponent {
    private cafe: Cafe = new Cafe();

    constructor(private cafeService: CafeService,
                private router: Router,
                private currentRoute: ActivatedRoute) { }

    addCafe(): void {
        this.cafeService.addCafe(this.cafe)
            .subscribe(() => this.router.navigate(['../'], { relativeTo: this.currentRoute }));
    }
}
