export class SocialAuth {
    constructor(public name: string,
                public logoUrl: string,
                public action: () => void) { }
}
