import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastModule } from 'ng2-toastr';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { ImageUploadModule } from 'ng2-imageupload';
import { FileUploadModule } from 'ng2-file-upload';

import {
    Config,
    EmptyLinkDirective,
    DefaultImageDirective,
    WindowService,
    ErrorHandlingInterceptor,
    CustomErrorHandler,
    SelectPointComponent,
    ImageUploaderComponent,
    BrowserWindowService
} from './';


const components = [ // Everything that is declared in shared module should be exported too.
    EmptyLinkDirective,
    DefaultImageDirective,
    ImageUploaderComponent,
    SelectPointComponent
];

@NgModule({
    imports: [
        CommonModule,
        AgmCoreModule.forRoot(),
        ToastModule.forRoot(),
        ImageUploadModule,
        FileUploadModule
    ],
    declarations: components,
    exports: components,
    providers: [
        { provide: Config, useValue: process.env.CONFIG },
        { provide: WindowService, useClass: BrowserWindowService },
        CustomErrorHandler,
        ErrorHandlingInterceptor
    ]
})
export class SharedModule { }
