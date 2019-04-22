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
    selector: 'hero-contact',
    templateUrl: './hero-contact.component.html',
    styleUrls: ['./hero-contact.component.css'],
    providers: [provideFormComponent(HeroContactComponent)],
    changeDetection: ChangeDetectionStrategy.OnPush 
    
})
export class HeroContactComponent {
    
    form: FormGroup;
    
    constructor(private store: Store<FormsState>) {
      this.form = HeroContactComponent.buildForm();
    }
  
    get formPath(): string {
      return FormsRoutes.routes.heroContact;
    }
  
    static buildForm(): FormGroup {
      return new FormGroup({
        'phone': new FormControl(null, [Validators.required]),
        'mobile': new FormControl(null),  
        'address': new FormControl(null, [Validators.required]),
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