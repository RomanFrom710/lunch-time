import { Injectable } from '@angular/core';
import { Interceptor, InterceptedResponse } from 'ng2-interceptors';
import { ToastsManager } from 'ng2-toastr';

import { UserStore } from '../';


@Injectable()
export class ErrorHandlingInterceptor implements Interceptor {
    constructor(private toastr: ToastsManager,
                private userStore: UserStore) {}

    public interceptAfter(interceptedResponse: InterceptedResponse): InterceptedResponse {
        if (interceptedResponse.response.status === 401) {
            // Suppress error, just logout user.
            this.userStore.resetUser();
            interceptedResponse.response.status = 200;
            interceptedResponse.response.ok = true;
        } else if (!interceptedResponse.response.ok) {
            const errorMessage = interceptedResponse.response.text() ||
                                 interceptedResponse.response.statusText;
            this.toastr.error(errorMessage);
        }

        return interceptedResponse;
    }
}
