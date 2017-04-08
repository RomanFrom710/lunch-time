import { Serializable } from '../../../shared';
import { UserType } from '../../../user';


export class Offer extends Serializable {
    token: string;
    userType: UserType;
}
