import { NgModule } from '@angular/core';
import { HttpModule, Http } from "@angular/http";
import { BrowserModule } from '@angular/platform-browser';
import { provideInterceptorService, InterceptorService } from 'ng2-interceptors';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule, ErrorHandlingInterceptor } from './shared';
import { UserModule, AuthHandlingInterceptor } from './user';
import { CafeModule } from './cafe';
import { InfoModule } from './info';
import { AdminModule } from './admin';
import { AppComponent }  from './app.component';


@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        SharedModule,
        InfoModule,
        CafeModule,
        UserModule,
        AdminModule,
        HttpModule
    ],
    declarations: [ AppComponent ],
    providers: [
        provideInterceptorService([ErrorHandlingInterceptor, AuthHandlingInterceptor]),
        { provide: Http, useExisting: InterceptorService }
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
