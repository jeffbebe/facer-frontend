import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { isUnhandledError } from '../utils/http.utils';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root',
})
export class HttpErrorService {
  constructor(private readonly snackbar: SnackbarService) {}

  private isCognitoNotAuthorizedException = (
    error: HttpErrorResponse
  ): boolean => {
    return (
      error.message === 'Cannot retrieve a new session' ||
      error.message === 'Refresh Token has expired' ||
      error.message === 'User is not confirmed.'
    );
  };

  private isTimeoutError = (error: HttpErrorResponse): boolean =>
    error.message === 'Timeout has occurred' || error.status === 0;

  public handleErrors = (error: HttpErrorResponse): void => {
    if (this.isCognitoNotAuthorizedException(error)) {
      this.snackbar.open({ message: `app.errors.${error.name}` });
      return;
    }

    if (typeof error === 'string') {
      this.snackbar.open({ message: error });
      return;
    }

    if (this.isTimeoutError(error)) {
      this.snackbar.open({ message: 'app.errors.weakConnection' });
      return;
    }

    if (isUnhandledError(error.status)) {
      this.snackbar.open({
        message: `app.errors.${error.status}`,
      });
      return;
    }

    this.snackbar.open({
      message: `app.errors.http.${error.error}`,
    });
  };
}
