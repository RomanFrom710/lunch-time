import { Component } from '@angular/core';

import { Cafe, CafeService } from '../../../cafe';


@Component({
    selector: 'lt-add-cafe',
    templateUrl: 'add-cafe.component.html'
})
export class AddCafeComponent {
    private cafe: Cafe = new Cafe();

    constructor(private cafeService: CafeService) { }

    addCafe(): void {
        this.cafeService.addCafe(this.cafe);
    }
}
