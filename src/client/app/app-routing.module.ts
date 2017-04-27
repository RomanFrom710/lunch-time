import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MainPageComponent, NotFoundComponent } from './info';
import {
    CafeMapComponent,
    CafeListComponent,
    CafeModalComponent,
    CafeResolve
} from './cafe';
import {
    SignInScreenComponent,
    ProfileSettingsComponent,
    RegisterComponent,
    AuthGuard,
    RegisterGuard,
    UserModule,
    UserType
} from './user';
import {
    AdminPanelComponent,
    ManageCafesComponent,
    AddCafeComponent,
    ManageUsersComponent,
    AddUserComponent
} from './admin';


@NgModule({
    imports: [
        UserModule,
        RouterModule.forRoot([
            {
                path: 'map',
                component: CafeMapComponent
            },

            {
                path: 'places',
                component: CafeListComponent,
                children: [
                    {
                        path: ':id',
                        component: CafeModalComponent,
                        resolve: {
                            cafe: CafeResolve
                        }
                    }
                ]
            },

            {
                path: 'login',
                component: SignInScreenComponent,
                canActivate: [AuthGuard],
                data: { roles: [UserType.Anon] }
            },
            {
                path: 'profile',
                component: ProfileSettingsComponent,
                canActivate: [AuthGuard],
                data: { roles: [UserType.Admin, UserType.SpotOwner, UserType.User] }
            },
            {
                path: 'admin',
                component: AdminPanelComponent,
                children: [
                    {
                        path: 'users',
                        component: ManageUsersComponent,
                        canActivate: [AuthGuard],
                        data: { roles: [UserType.Admin] }
                    },
                    {
                        path: 'users/add',
                        component: AddUserComponent,
                        canActivate: [AuthGuard],
                        data: { roles: [UserType.Admin] }
                    },
                    {
                        path: 'places',
                        component: ManageCafesComponent,
                        canActivate: [AuthGuard],
                        data: { roles: [UserType.Admin] }
                    },
                    {
                        path: 'places/add',
                        component: AddCafeComponent,
                        canActivate: [AuthGuard],
                        data: { roles: [UserType.Admin] }
                    },
                    {
                        path: '',
                        pathMatch: 'full',
                        redirectTo: 'places'
                    }
                ]
            },
            {
                path: 'register/:token',
                canActivate: [RegisterGuard],
                component: RegisterComponent
            },
            {
                path: '',
                component: MainPageComponent
            },
            {
                path: '**',
                component: NotFoundComponent
            }
        ])
    ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }
