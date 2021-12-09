import { createAction, props } from '@ngrx/store';

import { UserLoginData, UserRegisterData } from '../auth.interface';

export const loginUserRequest = createAction(
  '[Auth] Login User Request',
  props<{ payload: UserLoginData }>()
);

export const loginUserSuccess = createAction('[Auth] Login User Success');

export const loginUserFailure = createAction('[Auth] Login User Failure');

export const registerUserRequest = createAction(
  '[Auth] Register User Request',
  props<{ payload: UserRegisterData }>()
);

export const registerUserSuccess = createAction('[Auth] Register User Success');

export const registerUserFailure = createAction('[Auth] Register User Failure');

export const authActionTypes = {
  loginUserRequest,
  loginUserSuccess,
  loginUserFailure,
  registerUserRequest,
  registerUserSuccess,
  registerUserFailure,
};
