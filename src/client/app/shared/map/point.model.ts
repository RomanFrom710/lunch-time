import { Serializable } from '../';


export class Point extends Serializable {
    constructor(public latitude: number = 0,
                public longitude: number = 0) {
        super();
    }
}
