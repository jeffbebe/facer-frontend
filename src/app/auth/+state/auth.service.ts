import { Injectable } from '@angular/core';
import { of } from 'rxjs';

import { LoginUserData } from '../auth.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  public login(payload: LoginUserData) {
    return of('');
  }
}
