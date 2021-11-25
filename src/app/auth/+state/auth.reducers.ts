import { createReducer, on } from '@ngrx/store';

import { filterKey } from '../../shared/utils/filter-fetch-keys.util';
import { AuthState } from '../auth.interface';
import { authActionTypes } from './auth.actions';

export const initialState: AuthState = {
  isFetching: [],
};

export const authReducer = createReducer(
  initialState,
  on(authActionTypes.loginUserRequest, (state) => {
    return {
      ...state,
      isFetching: [...state.isFetching, 'login'],
    };
  }),
  on(authActionTypes.loginUserSuccess, (state) => {
    return {
      ...state,
      isFetching: filterKey(state.isFetching, 'login'),
    };
  }),
  on(authActionTypes.loginUserFailure, (state) => {
    return {
      ...state,
      isFetching: filterKey(state.isFetching, 'login'),
    };
  })
);
