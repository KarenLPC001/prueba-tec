import { createReducer, on } from '@ngrx/store';
import * as apiActions from '../actions/api.action';

export interface ApiState{
    data: any[];
    loading: boolean;
    error: any;
}

export const initialState: ApiState = {
    data: [],
    loading: false,
    error: null,
};

export const apiReducer = createReducer(
    initialState,
    on(apiActions.loadApi, state => ({
        ...state, loading: true, error: null
    })),

    on(apiActions.loadApiSuccess, (state, { data }) => ({
        ...state, data, loading:false, error: null
    })),

    on(apiActions.loadApiFailure, (state, { error }) => ({
        ...state, error, loading:false
    })),
);

// export function reducer(state = initialState, action: apiActions.ApiActions): ApiState {
//     return apiReducer(state, action);
// }