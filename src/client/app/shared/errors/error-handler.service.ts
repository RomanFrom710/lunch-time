import { Injectable, ErrorHandler } from '@angular/core';


@Injectable()
export class CustomErrorHandler extends ErrorHandler {
    constructor() {
        super(false);
    }

    handleError(error: any): void {
        console.log(error); // todo: Add logging
    }
}
