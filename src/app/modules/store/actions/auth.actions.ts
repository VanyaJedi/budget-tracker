import { createAction, props } from '@ngrx/store';
import { User } from '../../user/models';
import { CustomError } from '../../shared/models';
import { LoginCreds } from '../../auth/models';

export enum AuthActionTypes {
  Login = '[Auth] Login',
  Logout = '[Auth] Logout',
  LoginSuccess = '[Auth] Login Success',
  LoginFailure = '[Auth] Login Failure',
}

export const login = createAction(
  AuthActionTypes.Login,
  (creds: LoginCreds) => creds
);

export const logout = createAction(AuthActionTypes.Logout);

export const loginSuccess = createAction(
  AuthActionTypes.LoginSuccess,
  props<{ user: User }>()
);

export const loginFailure = createAction(
  AuthActionTypes.LoginFailure,
  props<{ error: CustomError }>()
);
