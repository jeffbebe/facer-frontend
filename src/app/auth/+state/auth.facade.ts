import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from '../../app.module';
import { UserLoginData } from '../auth.interface';
import { loginUserRequest } from './auth.actions';

@Injectable()
export class AuthFacade {
  constructor(private readonly store: Store<AppState>) {}

  loginUser(payload: UserLoginData): void {
    this.store.dispatch(loginUserRequest({ payload }));
  }
}
