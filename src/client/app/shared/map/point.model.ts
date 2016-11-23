import { Serializable } from '../';

export class Point extends Serializable {
    constructor(public latitude: number,
                public longitude: number) {
        super();
    }
}
