import { createAction, props } from '@ngrx/store';

import { User } from '../../shared/services/amplify.service';
import { UserLoginData, UserRegisterData } from '../auth.interface';

export const loginUserRequest = createAction(
  '[Auth] Login User Request',
  props<{ payload: UserLoginData }>()
);

export const loginUserSuccess = createAction(
  '[Auth] Login User Success',
  props<{ user: User }>()
);

export const loginUserFailure = createAction('[Auth] Login User Failure');

export const registerUserRequest = createAction(
  '[Auth] Register User Request',
  props<{ payload: UserRegisterData }>()
);

export const registerUserSuccess = createAction('[Auth] Register User Success');

export const registerUserFailure = createAction('[Auth] Register User Failure');

export const logoutUserRequest = createAction('[Auth] Logout User Request');

export const logoutUserSuccess = createAction('[Auth] Logout User Success');

export const logoutUserFailure = createAction('[Auth] Logout User Failure');

export const refreshUserToken = createAction(
  '[Auth] Refresh User Token',
  props<{ accessToken: string }>()
);

export const authActionTypes = {
  loginUserRequest,
  loginUserSuccess,
  loginUserFailure,
  registerUserRequest,
  registerUserSuccess,
  registerUserFailure,
  logoutUserRequest,
  logoutUserSuccess,
  logoutUserFailure,
  refreshUserToken,
};
