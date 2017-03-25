import { Injectable } from '@angular/core';
import { Interceptor, InterceptedRequest } from 'ng2-interceptors';


@Injectable()
export class CorsInterceptor implements Interceptor {
    public interceptBefore(interceptedRequest: InterceptedRequest): InterceptedRequest {
        interceptedRequest.options.withCredentials = true;

        return interceptedRequest;
    }
}
