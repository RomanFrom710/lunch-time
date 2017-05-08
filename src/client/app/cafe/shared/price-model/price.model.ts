import { Serializable } from '../../../shared';


export class Price extends Serializable {
    id: string;
    name: string;
    price: number;
    votes: [{
        user: string;
        price: number;
        date: Date;
    }]
}
