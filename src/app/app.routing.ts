import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './Pages/home.component';
import { AboutComponent } from './Pages/about.component';
import { ContactComponent } from './Pages/contact.component';

const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent }
];
export const Routing = RouterModule.forRoot(APP_ROUTES);
