import { Directive, Input, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, FormGroupDirective } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { debounceTime, first } from 'rxjs/operators';
import { FormsState } from '../../features/forms/store/forms/forms.state';
import { selectForm } from '../../features/forms/store/forms/forms.selectors';
import { UpdateFormValue, UpdateFormStatus } from '../../features/forms/store/forms/forms.actions';

@Directive({
  selector: '[connectForm]'
})
export class ConnectFormDirective implements OnInit, OnDestroy {

  @Input('connectForm') formPath: string;
  debounce: number = 300;
  formValueChange: Subscription;
  formStatusChange: Subscription;

  constructor(private formGroupDirective: FormGroupDirective,
    private store: Store<FormsState>) { }

  ngOnInit() {

    this.store.pipe(select(selectForm(this.formPath)), first())
      .subscribe(form => {

        this.formGroupDirective.form.patchValue(form.value);
        
        //Check if there is a FromArray control
        Object.keys(form.value).forEach(formArrayKey => {
          if (form.value[formArrayKey] instanceof Array && this.formGroupDirective.form.get(formArrayKey) instanceof FormArray) {
            this.formGroupDirective.form.setControl(formArrayKey, new FormArray([]));
            form.value[formArrayKey].forEach(formGroupValue => {
              const formGroup = new FormGroup({});
              Object.keys(formGroupValue).forEach(controlKey => {
                formGroup.addControl(controlKey, new FormControl(formGroupValue[controlKey]));
              });
              (<FormArray>this.formGroupDirective.form.get(formArrayKey)).push(formGroup);
            });
          }
        });
      });

    this.formValueChange = this.formGroupDirective.form.valueChanges.pipe(
      debounceTime(this.debounce)
    ).subscribe(value => {
      this.store.dispatch(new UpdateFormValue(
        { value: value, formPath: this.formPath }
      ));
    });

    this.formStatusChange = this.formGroupDirective.form.statusChanges.pipe(
      debounceTime(this.debounce)
    ).subscribe(status => {
      this.store.dispatch(new UpdateFormStatus(
        { status: status, formPath: this.formPath }
      ));
    });
  }

  ngOnDestroy() {
    this.formValueChange.unsubscribe();
    this.formStatusChange.unsubscribe();
  }

}
