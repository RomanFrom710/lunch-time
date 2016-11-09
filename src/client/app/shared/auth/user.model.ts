import { Serializable } from '../';


export enum Gender {
    Male,
    Female
}

export enum UserType {
    User,
    SpotOwner,
    Admin
}

export class User extends Serializable {
    authType: string;
    created: Date;
    firstName: string;
    gender: Gender;
    id: string;
    lastName: string;
    photoUrl: string;
    thirdPartyId: string;
    thirdPartyProfileUrl: string;
    userName: string;
    userType: UserType;

    get fullName() {
        return this.lastName ? `${this.firstName} ${this.lastName}` : this.firstName;
    }
}
