import { NgModule } from '@angular/core';
import { HttpModule, Http } from "@angular/http";
import { BrowserModule } from '@angular/platform-browser';
import { provideInterceptorService, InterceptorService } from 'ng2-interceptors';

import { SharedModule, ErrorHandlingInterceptor } from './shared';
import { UserModule } from './user';
import { AppComponent }  from './app.component';


@NgModule({
    imports: [ BrowserModule, SharedModule, UserModule, HttpModule ],
    declarations: [ AppComponent ],
    providers: [
        provideInterceptorService([ErrorHandlingInterceptor]),
        { provide: Http, useExisting: InterceptorService }
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
