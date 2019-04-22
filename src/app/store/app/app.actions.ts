import { Action } from '@ngrx/store';

export enum AppActionTypes {
    UPDATE_GLOBAL_PARAMS = "[App] Set Global Param"
}

export class UpdateGlobalParams implements Action {
    readonly type = AppActionTypes.UPDATE_GLOBAL_PARAMS
    constructor(public payload: any) { }
}

export type ApplicationAction = UpdateGlobalParams