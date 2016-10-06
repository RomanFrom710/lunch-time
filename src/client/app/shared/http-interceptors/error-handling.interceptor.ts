import { Injectable } from '@angular/core';
import { Interceptor, InterceptedResponse } from 'ng2-interceptors';
import { ToastsManager } from 'ng2-toastr';


@Injectable()
export class ErrorHandlingInterceptor implements Interceptor {
    constructor(private toastr: ToastsManager) {}

    public interceptAfter(response: InterceptedResponse): InterceptedResponse {
        // todo: check for auth
        // todo: provide better error messages
        if (!response.response.ok) {
            this.toastr.error(response.response.statusText);
        }
        return response;
    }
}
