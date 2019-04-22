import { RouterModule } from '@angular/router';
import { FormsRoutes } from './form.config';
import { FormsComponent } from './forms.component';
import { HeroInfoComponent } from './hero-info/hero-info.component';
import { HeroFilesComponent } from './hero-files/hero-files.component';
import { HeroContactComponent } from './hero-contact/hero-contact.component';

const FormsModuleRoutes = [
  {
    path: '', 
    component: FormsComponent,
    children: [
      { path: FormsRoutes.routes.heroInfo, component: HeroInfoComponent },
      { path: FormsRoutes.routes.heroFiles, component: HeroFilesComponent },
      { path: FormsRoutes.routes.heroContact, component: HeroContactComponent },

    ]
  }

];

export const routing = RouterModule.forChild(FormsModuleRoutes);