import {
    Component,
    Input,
    Output,
    EventEmitter
} from '@angular/core';
import { Observable } from 'rxjs';

import { Cafe, Price, CafeService } from '../';
import { AuthService, User } from '../../user';


@Component({
    selector: 'lt-cafe-prices',
    templateUrl: 'cafe-prices.component.html',
    styleUrls: ['cafe-prices.component.less']
})
export class CafePricesComponent {
    @Input() cafe: Cafe = null;
    @Output() cafeChange: EventEmitter<Cafe> = new EventEmitter<Cafe>();

    private currentUser: Observable<User>;
    private newPrice: Price = new Price();

    constructor(private cafeService: CafeService, authService: AuthService) {
        this.currentUser = authService.currentUser;
    }

    add(): void {
        if (this.newPrice.name) {
            this.newPrice.id = null;
        }
        // todo: add validation
        this.cafeService.addPrice(this.cafe.id, this.newPrice).subscribe(() => {});
    }
}
