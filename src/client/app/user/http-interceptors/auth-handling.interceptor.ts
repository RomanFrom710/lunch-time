import { Injectable } from '@angular/core';
import { Interceptor, InterceptedResponse } from 'ng2-interceptors';

import { UserStore } from '../store';


@Injectable()
export class AuthHandlingInterceptor implements Interceptor {
    constructor(private userStore: UserStore) {}

    public interceptAfter(interceptedResponse: InterceptedResponse): InterceptedResponse {
        if (interceptedResponse.response.status === 401) {
            this.userStore.resetUser();
        }

        return interceptedResponse;
    }
}
