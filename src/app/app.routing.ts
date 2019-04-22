import { Routes, RouterModule } from '@angular/router';
import { AppConstants } from './app.config';

const routes: Routes = [
    {
        path: AppConstants.routes.forms,
        loadChildren: './features/forms/forms.module#FormsModule',
    },
    { path: '', redirectTo: AppConstants.routes.forms, pathMatch: 'full' },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];

export const routing = RouterModule.forRoot(routes);