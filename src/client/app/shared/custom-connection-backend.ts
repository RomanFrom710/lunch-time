import { Observable } from 'rxjs';
import { ToastsManager } from 'ng2-toastr';
import { ReflectiveInjector, Injectable, Inject } from '@angular/core';
import { XHRBackend,
         BrowserXhr,
         ResponseOptions,
         XSRFStrategy,
         Request,
         Response} from '@angular/http';


export class CustomConnectionBackend extends XHRBackend {
    private toaster: ToastsManager = ReflectiveInjector.resolveAndCreate([ToastsManager]).get(ToastsManager);

    constructor (browserXhr: BrowserXhr,
                 responseOptions: ResponseOptions,
                 xsrfStrategy: XSRFStrategy) {
        console.log(this.toaster);
        super(browserXhr, responseOptions, xsrfStrategy);
    }

    createConnection(request: Request) {
        const xhrConnection = super.createConnection(request);
        xhrConnection.response = xhrConnection.response.catch((error: Response) => {
            this.toaster.error(error.statusText);
            return Observable.empty();
        });
        return xhrConnection;
    }
}
