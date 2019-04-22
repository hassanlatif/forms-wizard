import { createFeatureSelector, createSelector } from "@ngrx/store";
import { State } from "./app.reducer";

export const appGlobalState = createFeatureSelector<State>("global");

export const selectGlobalParam = (param: string) => createSelector(
    appGlobalState,
    appGlobalState => appGlobalState.global[param]
);