import { Injectable } from '@angular/core';
import { Interceptor, InterceptedResponse } from 'ng2-interceptors';
import { ToastsManager } from 'ng2-toastr';


@Injectable()
export class ErrorHandlingInterceptor implements Interceptor {
    constructor(private toastr: ToastsManager) {}

    public interceptAfter(interceptedResponse: InterceptedResponse): InterceptedResponse {
        if (!interceptedResponse.response.ok && interceptedResponse.response.status !== 401) {
            const errorMessage = interceptedResponse.response.json().error ||
                                 interceptedResponse.response.statusText;
            this.toastr.error(errorMessage);
        }

        return interceptedResponse;
    }
}
