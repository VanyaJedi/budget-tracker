import {
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
} from '@ngrx/store';
import { loginFailure, loginSuccess } from '../actions';
import { AuthState, authInitialState } from '../states';

export const authReducer = createReducer(
  authInitialState,
  on(
    loginSuccess,
    (state, { user }): AuthState => ({
      ...state,
      user,
      error: null,
    })
  ),
  on(
    loginFailure,
    (state, { error }): AuthState => ({
      ...state,
      user: null,
      error,
    })
  )
);

export const AUTH_FEATURE = 'auth';

export const selectAuthState = createFeatureSelector<AuthState>(AUTH_FEATURE);

export const selectUser = createSelector(
  selectAuthState,
  (authState: AuthState) => {
    return authState.user;
  }
);

export const selectAuthError = createSelector(
  selectAuthState,
  (authState: AuthState) => authState.error
);
