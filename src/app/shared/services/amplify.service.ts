import { Injectable } from '@angular/core';

import Amplify, { Auth } from 'aws-amplify';
import { CognitoUserSession } from 'amazon-cognito-identity-js';
import { from, Observable } from 'rxjs';

import { UserLoginData } from '../../auth/auth.interface';

import { amplifyConfig } from './amplify.service.config';

export interface CognitoUser {
  attributes: {
    email: string;
    sub: string;
    name: string;
    family_name: string;
    'custom:role': string;
  };
  signInUserSession: {
    idToken: {
      jwtToken: string;
    };
  };
}

export interface CurrentUserInfo {
  attributes: {
    email: string;
    sub: string;
  };
  id: string;
  username: string;
}

export interface User {
  email: string;
  sub: string;
}

@Injectable({
  providedIn: 'root',
})
export class AmplifyService {
  constructor() {
    Amplify.configure(amplifyConfig);
  }

  public signIn(payload: UserLoginData): Observable<CognitoUser> {
    return from(
      Auth.signIn({
        username: payload.emailAddress,
        password: payload.password,
      })
    );
  }

  public getCurrentUserInfo(): Observable<CurrentUserInfo> {
    return from(Auth.currentUserInfo());
  }

  public getCurrentSession(): Observable<CognitoUserSession> {
    return from(Auth.currentSession());
  }
}
