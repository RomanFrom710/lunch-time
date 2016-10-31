export enum Gender {
    Male,
    Female
}

export enum UserType {
    User,
    SpotOwner,
    Admin
}

export class User {
    authType: string;
    created: Date;
    firstName: string;
    gender: Gender;
    id: string;
    lastName: string;
    photoUrl: string;
    profileUrl: string;
    thirdPartyId: string;
    userName: string;
    userType: UserType;

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
