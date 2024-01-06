import { createSelector, createFeatureSelector } from '@ngrx/store';
import { ApiState } from '../reducers/api.reducer';

export const selectApiState = createFeatureSelector<ApiState>('api');

export const selectApiData = createSelector(
    selectApiState,
    (state: ApiState) => state.data
);

export const selectApiLoading = createSelector(
    selectApiState,
    (state: ApiState) => state.loading
);

export const selectApiError = createSelector(
    selectApiState,
    (state: ApiState) => state.error
);