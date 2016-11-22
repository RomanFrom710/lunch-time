import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CafeMapComponent, CafeListComponent } from './cafe';
import { MainPageComponent, NotFoundComponent } from './info';
import { SignInScreenComponent, ProfileSettingsComponent } from './user';
import {
    AdminPanelComponent,
    ManageCafesComponent,
    ManageUsersComponent
} from './admin';


@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: 'map', component: CafeMapComponent },
            { path: 'places', component: CafeListComponent },
            { path: 'login', component: SignInScreenComponent },
            { path: 'profile', component: ProfileSettingsComponent },
            { path: 'admin', component: AdminPanelComponent, children: [
                { path: '', redirectTo: 'places' },
                { path: 'users', component: ManageUsersComponent },
                { path: 'places', component: ManageCafesComponent }
            ] },
            { path: '', component: MainPageComponent },
            { path: '**', component: NotFoundComponent }
        ])
    ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }
