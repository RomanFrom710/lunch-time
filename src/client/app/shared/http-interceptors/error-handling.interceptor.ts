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
            this.userStore.resetUser();
        } else if (!interceptedResponse.response.ok) { // todo: provide better error messages
            this.toastr.error(interceptedResponse.response.statusText);
        }

        return interceptedResponse;
    }
}
