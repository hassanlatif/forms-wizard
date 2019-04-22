import { Component, Host, Input, OnInit, SkipSelf } from '@angular/core';
import { FormGroupDirective } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { FormComponent } from '../form-component';
import { FormsState } from '../../../features/forms/store/forms/forms.state';
import { selectFormVisited } from '../../../features/forms/store/forms/forms.selectors';

@Component({
  selector: 'field-error',
  templateUrl: './field-error.component.html',
  styleUrls: ['./field-error.component.css']
})
export class FieldErrorComponent implements OnInit {

  @Input() controlName;
  @Input() errorType;
  isFormVisited$: Observable<Boolean>;

  constructor(@Host() @SkipSelf() private formGroup: FormGroupDirective,
    private store: Store<FormsState>,
    public containerForm: FormComponent
  ) {}

  ngOnInit() {
    const formPath = this.containerForm.formPath;
    this.isFormVisited$ = this.store.pipe(select(selectFormVisited(formPath)));
  }

  get isInvalid() {
    let control = this.formGroup.form.get(this.controlName);
    return control.hasError(this.errorType);  // reusable as -> && (control.dirty || this.form.submitted);
  }

  get isTouched() {
    let control = this.formGroup.form.get(this.controlName);
    return control.touched;
  }

}
