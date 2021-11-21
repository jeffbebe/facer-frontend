import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from '../../app.module';
import { LoginUserData } from '../auth.interface';
import { loginUserRequest } from './auth.actions';

@Injectable()
export class AuthFacade {
  constructor(private readonly store: Store<AppState>) {}

  loginUser(payload: LoginUserData): void {
    this.store.dispatch(loginUserRequest({ payload }));
  }
}
