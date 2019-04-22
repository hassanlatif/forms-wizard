import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { filter } from 'rxjs/operators';
import { provideFormComponent, FormComponent } from '../../../shared/components/form-component';
import { FormsState } from '../store/forms/forms.state';
import { FormsRoutes } from '../form.config';
import { UpdateFormVisited } from '../store/forms/forms.actions';
import { selectFormVisited } from '../store/forms/forms.selectors';

@Component({
  selector: 'hero-files',
  templateUrl: './hero-files.component.html',
  styleUrls: ['./hero-files.component.css'],
  providers: [provideFormComponent(HeroFilesComponent)],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroFilesComponent implements OnInit, OnDestroy, FormComponent {

  form: FormGroup;

  constructor(private store: Store<FormsState>) {
    this.form = HeroFilesComponent.buildForm();
  }

  get formPath(): string {
    return FormsRoutes.routes.heroFiles;
  }

  static buildForm(): FormGroup {
    return new FormGroup({
      'description': new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.store.pipe(select(selectFormVisited(this.formPath)),
      filter(visited => !visited))
      .subscribe(visited => {
        this.store.dispatch(new UpdateFormVisited({ visited: true, formPath: this.formPath }));
      }).unsubscribe();
  }

}
