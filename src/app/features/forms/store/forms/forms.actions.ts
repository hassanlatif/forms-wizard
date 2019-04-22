import { Action } from '@ngrx/store';

export enum FormActionTypes {
  UPDATE_FORM_VALUE = '[Forms] Update Form Value Requested',
  UPDATE_FORM_STATUS = '[Forms] Update Form Status Requested',
  UPDATE_FORM_VISITED = '[Forms] Update Form Visited Requested',
  RESET_ALL_FORMS = '[Forms] Reset All Forms Requested',
  SUBMIT_FORM = '[Forms] Submit form Requested',
  FORM_SUBMIT_SUCCESS = '[FormsService] Form Submitted Successful',
  FORM_SUBMIT_NEW_SUCCESS = '[FormsService] New Form Submitted Successful',
  FORM_SUBMIT_ERROR = '[FormsService] Form Submission Error',
  SAVE_FORM = '[Forms] Save form Requested',
  FORM_SAVE_SUCCESS = '[FormsService] Form Save Successful',
  FORM_SAVE_NEW_SUCCESS = '[FormsService] New Form Save Successful',
  FORM_SAVE_ERROR = '[FormsService] Form Save Error',
  UPLOAD_FILES = '[FormsService] Upload Files Requested',
  FILES_UPLOADED = '[FormsService] Files Upload Successful',
  CANCEL_FORM = '[Forms] Cancel (Abandon/Withdraw) Application requested from service',
  FORM_CANCEL_SUCCESS = '[Forms] Cancel (Abandon/Withdraw) Application from service Successful',
  FORM_CANCEL_ERROR = '[Forms] Cancel (Abandon/Withdraw) Application from service Failed',
}

export class UpdateFormValue implements Action {
  readonly type = FormActionTypes.UPDATE_FORM_VALUE
  constructor(public payload: { value: any, formPath: string }) { }
}

export class UpdateFormStatus implements Action {
  readonly type = FormActionTypes.UPDATE_FORM_STATUS
  constructor(public payload: { status: any, formPath: string }) { }
}

export class UpdateFormVisited implements Action {
  readonly type = FormActionTypes.UPDATE_FORM_VISITED
  constructor(public payload: { visited: boolean, formPath: string }) { }
}

export class ResetAllForms implements Action {
  readonly type = FormActionTypes.RESET_ALL_FORMS
  constructor() { }
}

export class SubmitForm implements Action {
  readonly type = FormActionTypes.SUBMIT_FORM
  constructor(public payload: any) { }
}

export class FormSubmitSuccess implements Action {
  readonly type = FormActionTypes.FORM_SUBMIT_SUCCESS
  constructor(public payload: any) { }
}

export class FormSubmitNewSuccess implements Action {
  readonly type = FormActionTypes.FORM_SUBMIT_NEW_SUCCESS
  constructor(public payload: any) { }
}

export class FormSubmitError implements Action {
  readonly type = FormActionTypes.FORM_SUBMIT_ERROR
  constructor(public payload: any) { }
}

export class SaveForm implements Action {
  readonly type = FormActionTypes.SAVE_FORM
  constructor(public payload: any) { }
}

export class FormSaveSuccess implements Action {
  readonly type = FormActionTypes.FORM_SAVE_SUCCESS
  constructor(public payload: any) { }
}

export class FormSaveNewSuccess implements Action {
  readonly type = FormActionTypes.FORM_SAVE_NEW_SUCCESS
  constructor(public payload: any) { }
}

export class FormSaveError implements Action {
  readonly type = FormActionTypes.FORM_SAVE_ERROR
  constructor(public payload: any) { }
}

export class UploadFiles implements Action {
  readonly type = FormActionTypes.UPLOAD_FILES
  constructor(public payload: any) { }
}

export class FilesUploaded implements Action {
  readonly type = FormActionTypes.FILES_UPLOADED
  constructor(public payload: any) { }
}

export class CancelForm implements Action {
  readonly type = FormActionTypes.CANCEL_FORM
  constructor(public payload: any) { }
}

export class FormCancelSuccess implements Action {
  readonly type = FormActionTypes.FORM_CANCEL_SUCCESS
  constructor(public payload: any) { }
}

export class FormCancelError implements Action {
  readonly type = FormActionTypes.FORM_CANCEL_ERROR
  constructor(public payload: any) { }
}

export type FormActions = UpdateFormVisited | UpdateFormValue | UpdateFormStatus |
  ResetAllForms | SubmitForm | FormSubmitSuccess | FormSubmitError | SaveForm |
  FormSaveSuccess | FormSaveError | CancelForm | FormCancelSuccess | FormCancelError |
  UploadFiles | FilesUploaded;
