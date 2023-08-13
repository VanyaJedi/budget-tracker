import { Injectable } from '@angular/core';

import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { MockBackendService } from '../../mock-backend/services';
import {
  loadExpence,
  loadExpenceFailure,
  loadExpenceSuccess,
} from '../actions';
import { catchError, map, of, switchMap } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectExpenses } from '../reducers/expenses.reducer';

@Injectable()
export class ExpensesEffects {
  loadExpenses$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadExpence),
      concatLatestFrom(() => this.store.select(selectExpenses)),
      switchMap(([, cachedExpenses]) => {
        if (cachedExpenses.length) {
          return of(loadExpenceSuccess({ expenses: cachedExpenses }));
        }
        return this.mockBackendService.getExpenses().pipe(
          map(({ data }) => {
            if (data) {
              return loadExpenceSuccess({ expenses: data });
            }
            return loadExpenceFailure({ error: { message: 'No data' } });
          }),
          catchError(({ message }) =>
            of(loadExpenceFailure({ error: { message } }))
          )
        );
      })
    );
  });

  constructor(
    private actions$: Actions,
    private mockBackendService: MockBackendService,
    private store: Store
  ) {}
}
