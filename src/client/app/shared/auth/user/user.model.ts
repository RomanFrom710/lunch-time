import { Serializable, Point } from '../../';


// All this stuff is stored in shared module, because checking current user
// is common task and is needed throughout the whole app.

// todo: rewrite to string-based enums, when this feature will be released in typescript
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
