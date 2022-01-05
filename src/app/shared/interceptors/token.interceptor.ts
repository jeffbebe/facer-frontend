import { Observable, Subscription } from 'rxjs';
import { Injectable, OnDestroy } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';

import { AuthFacade } from '../../../app/auth/+state/auth.facade';
import { tap } from 'rxjs/operators';

@Injectable()
export class TokenInterceptor implements HttpInterceptor, OnDestroy {
  private subscription = new Subscription();
  private token: string = '';

  constructor(private readonly authFacade: AuthFacade) {
    this.subscription.add(
      this.authFacade
        .getUser()
        .pipe(tap((user) => (this.token = user.accessToken)))
        .subscribe()
    );
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.token}`,
        'Access-Control-Allow-Origin': '*',
      },
    });

    return next.handle(request);
  }
}
