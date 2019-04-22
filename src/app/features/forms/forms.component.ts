import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppConstants } from '../../app.config';
import { FormsRoutes, FormsSteps } from './form.config';
import { AppService } from '../../shared/services/app.service';
import { selectFormStatus, selectFormVisited, selectAllFormStatus } from './store/forms/forms.selectors';
import { FormsState } from './store/forms/forms.state';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  disableNext: boolean;
  disablePrevious: boolean;
  steps = FormsSteps;
  routes = FormsRoutes.routes;
  activeRoute: string;
  activeStepIndex: number;

  constructor(
    private appService: AppService,
    private router: Router,
    private store: Store<FormsState>) {
  }

  ngOnInit() {
    this.activeStepIndex = 0;
    this.activatePage();
    this.toggleNavigationButtons();
  }

  isFormValid$ = (formPath: string): Observable<boolean> => {
    return this.store.pipe(select(selectFormStatus(formPath)));
  }

  isFormVisited$ = (formPath: string): Observable<boolean> => {
    return this.store.pipe(select(selectFormVisited(formPath)));
  }

  enableSubmit$ = (): Observable<boolean> => {
    return this.store.pipe(select(selectAllFormStatus(Object.values(this.routes))));
  }

  next() {
    this.activeStepIndex = this.activeStepIndex < this.steps.length ? ++this.activeStepIndex : this.activeStepIndex;
    this.activeRoute = this.steps[this.activeStepIndex].route;
    this.activatePage();
    this.toggleNavigationButtons();
  }

  previous() {
    this.activeStepIndex = this.activeStepIndex > 0 ? --this.activeStepIndex : this.activeStepIndex;
    this.activeRoute = this.steps[this.activeStepIndex].route;
    this.activatePage();
    this.toggleNavigationButtons();
  }

  navigationTo(route: string) {
    this.activeRoute = route;
    this.activeStepIndex = this.steps.findIndex(step => step.route === route);
    this.activatePage();
    this.toggleNavigationButtons();
  }

  toggleNavigationButtons() {
    switch (this.activeStepIndex) {
      case 0: {
        this.disablePrevious = true;
        if (this.steps.length === 1)
          this.disableNext = true;
        else
          this.disableNext = false;
        break;
      }

      case this.steps.length - 1: {
        this.disableNext = true;
        this.disablePrevious = false;
        break;
      }

      default: {
        this.disablePrevious = false;
        this.disableNext = false;
        break;
      }

    }
  }

  activatePage() {
    // console.log(`${this.steps[this.activeStepIndex].route}`);
    this.router.navigate([`${AppConstants.routes.forms}/${this.steps[this.activeStepIndex].route}`], { queryParamsHandling: "merge" });
    this.activeRoute = this.steps[this.activeStepIndex].route;
    this.appService.setPageTitle(this.steps[this.activeStepIndex].title);
  }

  save() {
    alert('Save clicked!');
  }

  submit() {
    alert('Submit clicked!');
  }

  showSubmit(): boolean {
    return this.disableNext;
  }

  showSave(): boolean {
    return this.disablePrevious && !this.disableNext;
  }

}