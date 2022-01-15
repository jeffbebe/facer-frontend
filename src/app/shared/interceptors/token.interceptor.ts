import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { catchError, concatMap, switchMap, tap } from 'rxjs/operators';
import { Observable, Subscription, throwError } from 'rxjs';
import { CognitoUserSession } from 'amazon-cognito-identity-js';

import { AuthFacade } from '../../auth/+state/auth.facade';
import { AmplifyService } from '../services/amplify.service';
import { HTTP_STATUS } from '../utils/http.utils';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  private subscription = new Subscription();
  private accessToken = '';

  constructor(
    private readonly authFacade: AuthFacade,
    private readonly amplifyService: AmplifyService
  ) {
    this.subscription.add(
      this.authFacade
        .getUser()
        .pipe(tap((user) => (this.accessToken = user.accessToken)))
        .subscribe()
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  public intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (this.accessToken) {
      req = this.addTokenHeader(req, this.accessToken);
    }
    return next.handle(req).pipe(
      catchError((error) => {
        if (
          error instanceof HttpErrorResponse &&
          error.status === HTTP_STATUS.UNAUTHORIZED
        ) {
          return this.handleUnauthorized(req, next);
        }
        return throwError(error);
      })
    );
  }

  private handleUnauthorized(req: HttpRequest<any>, next: HttpHandler) {
    return this.amplifyService.refreshToken().pipe(
      switchMap((session: CognitoUserSession) => {
        const token = session.getAccessToken().getJwtToken();
        this.authFacade.refreshUserToken(token);

        return next.handle(this.addTokenHeader(req, token));
      }),
      catchError((err) => {
        this.authFacade.logoutUser();
        if (typeof err !== typeof HttpErrorResponse) {
          return throwError({
            message: 'Cannot retrieve a new session',
            name: 'NoSessionToRetrieve',
          });
        }

        return throwError(err);
      })
    );
  }

  private addTokenHeader(request: HttpRequest<any>, token: string) {
    return request.clone({
      headers: request.headers.set('Authorization', `Bearer ${token}`),
    });
  }
}
