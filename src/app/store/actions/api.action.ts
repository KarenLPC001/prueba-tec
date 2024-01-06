import { createAction, props } from '@ngrx/store';

export const loadApi = createAction(
    "[API] Load Data",
    props<{ loading: boolean }>()
);

export const loadApiSuccess = createAction(
    "[API] Load Data Success",
    props<{ data: any[] }>()
);

export const loadApiFailure = createAction(
    "[API] Load Data Failure",
    props<{ error: any }>()
);
