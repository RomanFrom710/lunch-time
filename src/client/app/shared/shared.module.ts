import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastModule } from 'ng2-toastr';
import { AgmCoreModule } from 'angular2-google-maps/core';

import {
    Config,
    EmptyLink,
    WindowService,
    ErrorHandlingInterceptor,
    SelectPointComponent,
    ShowPointComponent,
    BrowserWindowService
} from './';


const components = [ // Obviously everything that is declared in shared module should be exported too.
    EmptyLink,
    SelectPointComponent,
    ShowPointComponent
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
