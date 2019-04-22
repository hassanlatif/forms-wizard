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
    selector: '<%= dasherize(name) %>',
    templateUrl: './<%= dasherize(name) %>.component.html',
    styleUrls: ['./<%= dasherize(name) %>.component.css'],
    providers: [provideFormComponent(<%= classify(name) %>Component)],
    changeDetection: ChangeDetectionStrategy.OnPush 
    
})
export class <%= classify(name) %>Component {
    
    form: FormGroup;

    constructor(private store: Store<FormsState>) {
      this.form = <%= classify(name) %>Component.buildForm();
    }
  
    get formPath(): string {
      return FormsRoutes.routes.<%= camelize(name) %>;
    }
  
    static buildForm(): FormGroup {
      return new FormGroup({
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