import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, concatMap, map } from 'rxjs/operators';

import {
  loginUserRequest,
  loginUserSuccess,
  loginUserFailure,
} from './auth.actions';
import { AuthService } from './auth.service';

@Injectable()
export class AuthEffects {
  constructor(
    private readonly authService: AuthService,
    private readonly actions$: Actions
  ) {}

  public loginUserRequest$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loginUserRequest),
      concatMap(({ payload }) => {
        return this.authService.login(payload).pipe(
          map(() => {
            return loginUserSuccess();
          }),
          catchError(() => {
            return of(loginUserFailure());
          })
        );
      })
    );
  });
}
