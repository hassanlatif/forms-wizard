import { Component, OnDestroy, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { filter } from 'rxjs/operators';
import { FormComponent, provideFormComponent } from '../../../shared/components/form-component';
import { FormsRoutes } from '../form.config';
import { UpdateFormVisited } from '../store/forms/forms.actions';
import { selectFormVisited } from '../store/forms/forms.selectors';
import { FormsState } from '../store/forms/forms.state';

@Component({
  selector: 'hero-info',
  templateUrl: './hero-info.component.html',
  styleUrls: ['./hero-info.component.css'],
  providers: [provideFormComponent(HeroInfoComponent)],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroInfoComponent implements FormComponent, OnDestroy, OnInit {

  form: FormGroup;
  titles = [{ v: 1, l: 'Mr.' }, { v: 2, l: 'Ms.' }];

  constructor(private store: Store<FormsState>) {
    this.form = HeroInfoComponent.buildForm();
  }

  public get formPath() {
    return FormsRoutes.routes.heroInfo;
  }

  ngOnInit() { }

  ngOnDestroy() {
    this.store.pipe(select(selectFormVisited(this.formPath)),
      filter(visited => !visited))
      .subscribe(visited => {
        this.store.dispatch(new UpdateFormVisited({ visited: true, formPath: this.formPath }));
      }).unsubscribe();
  }

  public static buildForm(): FormGroup {
    return new FormGroup({
      'title': new FormControl(null, [Validators.required]),
      'surname': new FormControl(null, [Validators.required]),
      'firstName': new FormControl(null, [Validators.required]),
      'dateOfBirth': new FormControl(null, [Validators.required]),
    });
  }


}
