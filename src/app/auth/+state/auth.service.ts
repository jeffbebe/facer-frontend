import { Injectable } from '@angular/core';
import { of } from 'rxjs';

import { AmplifyService } from '../../shared/services/amplify.service';
import { UserLoginData } from '../auth.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private readonly amplifyService: AmplifyService) {}

  public login(payload: UserLoginData) {
    return of(this.amplifyService.signIn(payload));
  }
}
