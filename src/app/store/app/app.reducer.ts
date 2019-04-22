import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';

import * as fromFormsReducer from '../../features/forms/store/forms/forms.reducer';
import * as fromFormsState from '../../features/forms/store/forms/forms.state';

import { environment } from '../../../environments/environment';
import { FormActionTypes } from '../../features/forms/store/forms/forms.actions';
import { AppActionTypes } from './app.actions';


export interface State {
  forms: fromFormsState.FormsState;
  global: any;
}

export const reducers: ActionReducerMap<State> = {
  forms: fromFormsReducer.formsReducer,
  global: reducer

};

export function reducer(state, action) {
  switch (action.type) {

    case AppActionTypes.UPDATE_GLOBAL_PARAMS:
      return {
        ...state,
        global: {
          [action.payload.key]: action.payload.value
        }
      }

    default:
      return state;
  }
}

export function resetForms(reducer) {
  return function (state, action) {
    return reducer(action.type === FormActionTypes.RESET_ALL_FORMS ? undefined : state, action);
  }
}

export const metaReducers: MetaReducer<State>[] = !environment.production ? [resetForms] : [resetForms];
