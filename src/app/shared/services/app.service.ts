import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  
  private _pageTitle = new BehaviorSubject('');

  constructor() { }

  setPageTitle(title: string) {
    this._pageTitle.next(title);
  }

  get pageTitle(): BehaviorSubject<String> {
    return this._pageTitle;
  }



}
