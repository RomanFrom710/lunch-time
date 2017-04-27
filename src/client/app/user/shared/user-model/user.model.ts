import { Serializable, Point } from '../../../shared';


export enum Gender {
    Male = 1,
    Female = 2
}

export enum UserType {
    Anon = 0, // Needed for guards compatibility
    User = 1,
    SpotOwner = 2,
    Admin = 3
}

export class User extends Serializable {
    authType: string;
    created: Date;
    firstName: string;
    gender: Gender;
    id: string;
    lastName: string;
    password: string;
    photoUrl: string;
    place: Point;
    thirdPartyId: string;
    thirdPartyProfileUrl: string;
    username: string;
    userType: UserType;

    get fullName() {
        if (this.lastName) {
            return `${this.firstName} ${this.lastName}`;
        } else {
            return this.firstName || this.username;
        }
    }

    get isSpotOwner() {
        return this.userType === UserType.SpotOwner || UserType[this.userType.toString()] === UserType.SpotOwner;
    }

    get isAdmin() {
        return this.userType === UserType.Admin || UserType[this.userType.toString()] === UserType.Admin;
    }
}
