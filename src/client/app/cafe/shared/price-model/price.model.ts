import { Serializable } from '../../../shared';


export class Price extends Serializable {
    id: string;
    name: string;
    price: number;
    votes: number;
    hasVoted: boolean;
}
