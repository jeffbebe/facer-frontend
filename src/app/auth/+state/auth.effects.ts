import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, concatMap, map } from 'rxjs/operators';

import { SnackbarService } from '../../shared/services/snackbar.service';
import { AbsolutePaths } from '../../shared/dictionaries/url-paths';
import { HttpErrorService } from '../../shared/services/http-error.service';
import {
  loginUserRequest,
  loginUserSuccess,
  loginUserFailure,
  registerUserSuccess,
  registerUserFailure,
  registerUserRequest,
} from './auth.actions';
import { AuthService } from './auth.service';

@Injectable()
export class AuthEffects {
  constructor(
    private readonly authService: AuthService,
    private readonly actions$: Actions,
    private readonly httpErrorService: HttpErrorService,
    private readonly router: Router,
    private readonly snackbar: SnackbarService
  ) {}

  public loginUserRequest$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loginUserRequest),
      concatMap(({ payload }) => {
        return this.authService.login(payload).pipe(
          map(() => {
            return loginUserSuccess();
          }),
          catchError((httpError: HttpErrorResponse) => {
            this.httpErrorService.handleErrors(httpError);
            return of(loginUserFailure());
          })
        );
      })
    );
  });

  public registerUserRequest$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(registerUserRequest),
      concatMap(({ payload }) => {
        return this.authService.register(payload).pipe(
          map(() => {
            this.snackbar.open({ message: 'app.auth.register.success' });
            this.router.navigate([AbsolutePaths.auth.login]);
            return registerUserSuccess();
          }),
          catchError((httpError: HttpErrorResponse) => {
            this.httpErrorService.handleErrors(httpError);
            return of(registerUserFailure());
          })
        );
      })
    );
  });
}
