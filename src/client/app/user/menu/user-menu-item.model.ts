export class UserMenuItem {
    constructor(public title: string,
                public link: string,
                public action?: () => void) {
        if (!action) {
            this.action = () => { };
        }
    }
}
