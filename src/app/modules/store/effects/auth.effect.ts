import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loginSuccess, loginFailure, login, logout } from '../actions';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { MockBackendService } from '../../mock-backend/services';

@Injectable()
export class AuthEffects {
  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(login),
      switchMap((action) =>
        this.mockBackendService.login(action.username, action.password).pipe(
          map((response) => {
            if (response.success) {
              if (response.data) {
                return loginSuccess({ user: response.data });
              } else {
                return loginFailure({
                  error: { message: 'Data is undefined' },
                });
              }
            } else {
              throw response.message;
            }
          }),
          catchError(({ message }) => of(loginFailure({ error: { message } })))
        )
      )
    );
  });

  loginSuccess$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(loginSuccess),
        tap(({ user }) => {
          window.localStorage.setItem('user', JSON.stringify(user));
        })
      );
    },
    { dispatch: false }
  );

  logout$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(logout),
        tap(() => {
          window.localStorage.setItem('user', '');
        })
      );
    },
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private mockBackendService: MockBackendService
  ) {}
}
