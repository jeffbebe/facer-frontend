import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { User } from '../../shared/services/amplify.service';
import { AppState } from '../../app.module';
import { UserLoginData, UserRegisterData } from '../auth.interface';
import {
  loginUserRequest,
  logoutUserRequest,
  registerUserRequest,
} from './auth.actions';
import { userSelector } from './auth.selector';

@Injectable()
export class AuthFacade {
  constructor(private readonly store: Store<AppState>) {}

  public loginUser(payload: UserLoginData): void {
    this.store.dispatch(loginUserRequest({ payload }));
  }

  public registerUser(payload: UserRegisterData): void {
    this.store.dispatch(registerUserRequest({ payload }));
  }

  public getUser(): Observable<User> {
    return this.store.select(userSelector);
  }

  public logoutUser(): void {
    this.store.dispatch(logoutUserRequest());
  }
}
