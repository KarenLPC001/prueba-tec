import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as apiActions from '../actions/api.action';
import { ApiService } from 'src/app/service/api.service';

@Injectable()
export class ApiEffects {
    loadApi$ = createEffect(() =>
        this.actions$.pipe(
            ofType(apiActions.loadApi),
            mergeMap(() =>
                this.apiService.getData().pipe(
                    map(data => apiActions.loadApiSuccess({ data })),
                    catchError(error => of(apiActions.loadApiFailure({ error }))),
                ),
            ),
        ),
    );

    constructor(private actions$: Actions, private apiService: ApiService) { }
}