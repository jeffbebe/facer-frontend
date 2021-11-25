import { createAction, props } from '@ngrx/store';

import { UserLoginData } from '../auth.interface';

export const loginUserRequest = createAction(
  '[Auth] Login User Request',
  props<{ payload: UserLoginData }>()
);

export const loginUserSuccess = createAction('[Auth] Login User Success');

export const loginUserFailure = createAction('[Auth] Login User Failure');

export const authActionTypes = {
  loginUserRequest,
  loginUserSuccess,
  loginUserFailure,
};
