import { Injectable } from '@angular/core';

import { Config, User } from '../../shared';


@Injectable()
export class UserService {
    constructor(private config: Config) { }

    public updateProfile(userDto: User) : User {

    }
}
