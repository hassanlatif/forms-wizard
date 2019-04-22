import { FormActionTypes, FormActions } from './forms.actions';
import { initialState, FormsState } from './forms.state';
import { AppStatus } from 'src/app/app.config';

export function formsReducer(state = initialState, action: FormActions): FormsState {
  switch (action.type) {

    case FormActionTypes.UPDATE_FORM_VALUE:
      return {
        ...state,
        [action.payload.formPath]: { ...state[action.payload.formPath], value: action.payload.value }
      };

    case FormActionTypes.UPDATE_FORM_STATUS:
      return {
        ...state,
        [action.payload.formPath]: { ...state[action.payload.formPath], status: action.payload.status }
      };

    case FormActionTypes.UPDATE_FORM_VISITED:
      return {
        ...state,
        [action.payload.formPath]: { ...state[action.payload.formPath], visited: action.payload.visited }
      };

    case FormActionTypes.SUBMIT_FORM:
      return {
        ...state,
      };

    case FormActionTypes.FORM_SUBMIT_SUCCESS:
      return {
        ...state,
        submission: { result: AppStatus.SUBMITTED, response: action.payload }
      };

    
    case FormActionTypes.FORM_SUBMIT_ERROR:
      return {
        ...state,
        submission: { result: AppStatus.ERROR, response: action.payload }
      };


    case FormActionTypes.SAVE_FORM:
      return {
        ...state,
      };

    case FormActionTypes.FORM_SAVE_SUCCESS:
      return {
        ...state,
        submission: { result: AppStatus.SAVED, response: action.payload }
      };

    case FormActionTypes.FORM_SAVE_ERROR:
      return {
        ...state,
        submission: { result: AppStatus.ERROR, response: action.payload }
      };

    case FormActionTypes.CANCEL_FORM:
      return {
        ...state,
      };

    case FormActionTypes.FORM_CANCEL_SUCCESS:
      return {
        ...state,
        submission: { result: AppStatus.CANCELLED, response: action.payload }
      };

    case FormActionTypes.FORM_CANCEL_ERROR:
      return {
        ...state,
        submission: { result: AppStatus.ERROR, response: action.payload }
      };

    default:
      return state;
  }
}
