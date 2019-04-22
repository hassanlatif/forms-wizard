import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppService } from '../../services/app.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ResetAllForms } from '../../../features/forms/store/forms/forms.actions';
import { FormsState } from '../../../features/forms/store/forms/forms.state';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  headerTitle$: Observable<String>;

  constructor(private appService: AppService, private router: Router, private store: Store<FormsState>) { }

  ngOnInit() {
    this.headerTitle$ = this.appService.pageTitle;
  }

  gotoHome() {
    this.store.dispatch(new ResetAllForms());    
  }

}
