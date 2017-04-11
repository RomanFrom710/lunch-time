import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule, Http } from "@angular/http";
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideInterceptorService, InterceptorService } from 'ng2-interceptors';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule, ErrorHandlingInterceptor, CustomErrorHandler } from './shared';
import { UserModule, AuthHandlingInterceptor, CorsInterceptor } from './user';
import { CafeModule } from './cafe';
import { InfoModule } from './info';
import { AdminModule } from './admin';
import { AppComponent }  from './app.component';


@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
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
        provideInterceptorService([ErrorHandlingInterceptor, AuthHandlingInterceptor, CorsInterceptor]),
        { provide: Http, useExisting: InterceptorService },
        { provide: ErrorHandler, useClass: CustomErrorHandler }
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
