import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CognitoUserSession } from 'amazon-cognito-identity-js';

import {
  AmplifyService,
  CurrentUserInfo,
} from '../../shared/services/amplify.service';
import { UserLoginData, UserRegisterData } from '../auth.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private readonly amplifyService: AmplifyService,
    private readonly http: HttpClient
  ) {}

  public login(payload: UserLoginData) {
    return this.amplifyService.signIn(payload);
  }

  public register(payload: UserRegisterData) {
    return this.http.post('api/register', payload);
  }

  public getCurrentUserInfo(): Observable<CurrentUserInfo> {
    return this.amplifyService.getCurrentUserInfo();
  }

  public getCurrentSession(): Observable<CognitoUserSession> {
    return this.amplifyService.getCurrentSession();
  }
}
