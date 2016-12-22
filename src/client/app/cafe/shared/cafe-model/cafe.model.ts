import { Serializable, Point } from '../../../shared';


export class Cafe extends Serializable {
    name: string;
    address: string;
    description: string;
    place: Point;
}
