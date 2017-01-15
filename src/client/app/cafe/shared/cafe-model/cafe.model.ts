import { Serializable, Point } from '../../../shared';


export class Cafe extends Serializable {
    id: string;
    name: string;
    address: string;
    description: string;
    place: Point;
    photoUrl: string;
}
