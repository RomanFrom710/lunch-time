import { Serializable, Point } from '../../../shared';
import { Price } from '../';


export class Cafe extends Serializable {
    id: string;
    name: string;
    address: string;
    description: string;
    place: Point;
    prices: [Price];
    photoUrl: string;
}
