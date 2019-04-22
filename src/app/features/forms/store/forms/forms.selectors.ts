import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FormsState, FormState } from './forms.state';


export const selectState = createFeatureSelector<FormsState>("forms");

export const selectAllForms = createSelector(
    selectState
);

export const selectForm = (formName: string) => createSelector(
    selectAllForms,
    allforms => allforms[formName]
);

export const selectFormVisited = (formName: string) => createSelector(
    selectAllForms,
    allforms => allforms[formName] ? allforms[formName].visited : null
);

export const selectFormStatus = (formName: string) => createSelector(
    selectAllForms,
    allforms => allforms[formName].status === 'VALID'
);

export const selectAllFormStatus = (formPaths: string[]) => createSelector(
    selectAllForms,
    allforms => formPaths.every(formPath => allforms[formPath].status === 'VALID')
);

export const selectAllFormsValue = (formPaths: string[]) => createSelector(
    selectAllForms,
    allforms => formPaths.map(formPath => allforms[formPath].value)
);

export const selectFormSubmission = createSelector(
    selectAllForms,
    allforms => allforms.submission
);

