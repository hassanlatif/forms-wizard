import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { FieldErrorComponent } from './components/field-error/field-error.component';
import { FilesAttachComponent } from './components/files-attach/files-attach.component';
import { HeaderComponent } from './components/header/header.component';
import { AddressControlComponent } from './controls/address-control/address-control.component';
import { ConnectFormDirective } from './directives/connect-form.directive';
import { NgbDatePipe } from './pipes/ngb-date.pipe';
import { NgbTimePipe } from './pipes/ngb-time.pipe';
import { DateFormatter } from './utils/date-formatter';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    FontAwesomeModule
  ],
  declarations: [HeaderComponent,
    ConnectFormDirective,
    NgbDatePipe,
    NgbTimePipe,
    FilesAttachComponent,
    FieldErrorComponent,
    AddressControlComponent],
  exports: [HeaderComponent,
    AddressControlComponent,
    ConnectFormDirective,
    NgbDatePipe,
    NgbTimePipe,
    FilesAttachComponent,
    FieldErrorComponent],
  entryComponents: [AddressControlComponent],
  providers: [{ provide: NgbDateParserFormatter, useClass: DateFormatter }],


})
export class SharedModule { }
