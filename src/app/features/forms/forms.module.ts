import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsComponent } from './forms.component';
import { SharedModule } from '../../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { DateFormatter } from '../../shared/utils/date-formatter';
import { FieldErrorComponent } from '../../shared/components/field-error/field-error.component';
import { routing } from './forms.routing';
import { StoreModule } from '@ngrx/store';
import * as fromForms from './store/forms/forms.reducer';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeroInfoComponent } from './hero-info/hero-info.component';
import { HeroFilesComponent } from './hero-files/hero-files.component';
import { HeroContactComponent } from './hero-contact/hero-contact.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    routing,
    SharedModule,
    NgbModule,
    FontAwesomeModule,
    StoreModule.forFeature('forms', fromForms.formsReducer),
  ],
  declarations: [
    FormsComponent, HeroInfoComponent, HeroFilesComponent, HeroContactComponent
  ],
  providers: [{ provide: NgbDateParserFormatter, useClass: DateFormatter }],
  entryComponents: [FieldErrorComponent]
})
export class FormsModule { }
