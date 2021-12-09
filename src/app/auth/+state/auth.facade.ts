import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from '../../app.module';
import { UserLoginData, UserRegisterData } from '../auth.interface';
import { loginUserRequest, registerUserRequest } from './auth.actions';

@Injectable()
export class AuthFacade {
  constructor(private readonly store: Store<AppState>) {}

  public loginUser(payload: UserLoginData): void {
    this.store.dispatch(loginUserRequest({ payload }));
  }

  public registerUser(payload: UserRegisterData): void {
    this.store.dispatch(registerUserRequest({ payload }));
  }
}
