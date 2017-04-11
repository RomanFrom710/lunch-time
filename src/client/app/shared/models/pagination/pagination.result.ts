import { Serializable } from '../../';


export class PaginationResult<T> extends Serializable {
    public data: T[];
    public total: number;
}
