import { User } from '../../';


export class SocialAuth {
    constructor(public name: string,
                public logoUrl: string,
                public action: () => Promise<User>) { }
}
