import { RouterModule } from '@angular/router';

import { CafeMapComponent, CafeListComponent } from './cafe';
import { MainPageComponent, NotFoundComponent } from './info';


export const routes = RouterModule.forRoot([
    { path: 'map', component: CafeMapComponent },
    { path: 'places', component: CafeListComponent },
    { path: '', component: MainPageComponent },
    { path: '**', component: NotFoundComponent }
]);
