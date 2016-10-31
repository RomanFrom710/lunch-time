import { Injectable } from '@angular/core';
import { Interceptor, InterceptedResponse } from 'ng2-interceptors';
import { ToastsManager } from 'ng2-toastr';

import { AuthService } from '../';


@Injectable()
export class ErrorHandlingInterceptor implements Interceptor {
    constructor(private toastr: ToastsManager,
                private authService: AuthService) {}

    public interceptAfter(interceptedResponse: InterceptedResponse): InterceptedResponse {
        if (interceptedResponse.response.status === 401) {
            this.authService.logout();
        } else if (!interceptedResponse.response.ok) { // todo: provide better error messages
            this.toastr.error(interceptedResponse.response.statusText);
        }

        return interceptedResponse;
    }
}
