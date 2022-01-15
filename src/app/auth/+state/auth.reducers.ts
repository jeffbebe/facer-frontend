import { createReducer, on } from '@ngrx/store';

import { filterKey } from '../../shared/utils/filter-fetch-keys.util';
import { AuthState } from '../auth.interface';
import { authActionTypes } from './auth.actions';

export const initialState: AuthState = {
  isFetching: [],
  user: { sub: '', email: '', accessToken: '' },
};

export const authReducer = createReducer(
  initialState,
  on(authActionTypes.loginUserRequest, (state) => {
    return {
      ...state,
      isFetching: [...state.isFetching, 'login'],
    };
  }),
  on(authActionTypes.loginUserSuccess, (state, action) => {
    return {
      ...state,
      user: action.user,
      isFetching: filterKey(state.isFetching, 'login'),
    };
  }),
  on(authActionTypes.loginUserFailure, (state) => {
    return {
      ...state,
      isFetching: filterKey(state.isFetching, 'login'),
    };
  }),
  on(authActionTypes.registerUserRequest, (state) => {
    return {
      ...state,
      isFetching: [...state.isFetching, 'register'],
    };
  }),
  on(authActionTypes.registerUserSuccess, (state) => {
    return {
      ...state,
      isFetching: filterKey(state.isFetching, 'register'),
    };
  }),
  on(authActionTypes.registerUserFailure, (state) => {
    return {
      ...state,
      isFetching: filterKey(state.isFetching, 'register'),
    };
  }),
  on(authActionTypes.logoutUserRequest, (state) => {
    return {
      ...state,
      isFetching: [...state.isFetching, 'logout'],
    };
  }),
  on(authActionTypes.logoutUserSuccess, (state) => {
    return {
      ...state,
      user: initialState.user,
      isFetching: filterKey(state.isFetching, 'logout'),
    };
  }),
  on(authActionTypes.logoutUserFailure, (state) => {
    return {
      ...state,
      isFetching: filterKey(state.isFetching, 'logout'),
    };
  }),
  on(authActionTypes.refreshUserToken, (state, action) => {
    return {
      ...state,
      user: { ...state.user, accessToken: action.accessToken },
    };
  })
);
