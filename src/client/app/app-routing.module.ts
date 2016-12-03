import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CafeMapComponent, CafeListComponent } from './cafe';
import { MainPageComponent, NotFoundComponent } from './info';
import {
    SignInScreenComponent,
    ProfileSettingsComponent,
    AuthGuard,
    UserModule,
    UserType
} from './user';
import {
    AdminPanelComponent,
    ManageCafesComponent,
    ManageUsersComponent
} from './admin';


@NgModule({
    imports: [
        UserModule,
        RouterModule.forRoot([
            { path: 'map', component: CafeMapComponent },
            { path: 'places', component: CafeListComponent },
            { path: 'login', component: SignInScreenComponent,
                canActivate: [AuthGuard], data: { roles: [UserType.Anon] } },
            { path: 'profile', component: ProfileSettingsComponent,
                canActivate: [AuthGuard], data: { roles: [UserType.Admin, UserType.SpotOwner, UserType.User] }},
            { path: 'admin', component: AdminPanelComponent, children: [
                { path: 'users', component: ManageUsersComponent,
                    canActivate: [AuthGuard], data: { roles: [UserType.Admin] } },
                { path: 'places', component: ManageCafesComponent,
                    canActivate: [AuthGuard], data: { roles: [UserType.Admin] } },
                { path: '', redirectTo: 'places' }
            ] },
            { path: '', component: MainPageComponent },
            { path: '**', component: NotFoundComponent }
        ])
    ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }
