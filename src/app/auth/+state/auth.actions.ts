import { createAction, props } from '@ngrx/store';

import { LoginUserData } from '../auth.interface';

export const loginUserRequest = createAction(
  '[Auth] Login User Request',
  props<{ payload: LoginUserData }>()
);

export const loginUserSuccess = createAction('[Auth] Login User Success');

export const loginUserFailure = createAction('[Auth] Login User Failure');

export const authActionTypes = {
  loginUserRequest,
  loginUserSuccess,
  loginUserFailure,
};
