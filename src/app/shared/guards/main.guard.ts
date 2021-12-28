import { CanActivateChild, Router } from '@angular/router';
import { Injectable, OnDestroy } from '@angular/core';
import { of, Subscription } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { AuthFacade } from '../../../app/auth/+state/auth.facade';
import { AbsolutePaths } from '../dictionaries/url-paths';

@Injectable({
  providedIn: 'root',
})
export class MainGuard implements CanActivateChild, OnDestroy {
  private subscription: Subscription;
  private canActivate = false;

  constructor(
    private readonly authFacade: AuthFacade,
    private readonly router: Router
  ) {
    this.subscription = this.authFacade
      .getUser()
      .pipe(
        tap((user) => {
          this.canActivate = user.sub.length > 0;
        })
      )
      .subscribe();
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public canActivateChild(): boolean {
    !this.canActivate && this.router.navigate([AbsolutePaths.auth.login]);
    return this.canActivate;
  }
}
