import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastModule } from 'ng2-toastr';
import { AgmCoreModule } from 'angular2-google-maps/core';

import {
    Config,
    EmptyLinkDirective,
    DefaultImageDirective,
    WindowService,
    ErrorHandlingInterceptor,
    SelectPointComponent,
    BrowserWindowService
} from './';


const components = [ // Everything that is declared in shared module should be exported too.
    EmptyLinkDirective,
    DefaultImageDirective,
    SelectPointComponent
];

@NgModule({
    imports: [
        CommonModule,
        AgmCoreModule.forRoot(),
        ToastModule
    ],
    declarations: components,
    exports: components,
    providers: [
        { provide: Config, useValue: process.env.CONFIG },
        { provide: WindowService, useClass: BrowserWindowService },
        ErrorHandlingInterceptor
    ]
})
export class SharedModule { }
