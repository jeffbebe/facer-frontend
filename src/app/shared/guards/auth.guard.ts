import { CanActivateChild, Router } from '@angular/router';
import { Injectable, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';

import { AuthFacade } from '../../../app/auth/+state/auth.facade';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivateChild, OnDestroy {
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
          this.canActivate = user.sub.length === 0;
        })
      )
      .subscribe();
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public canActivateChild(): boolean {
    !this.canActivate && this.router.navigate(['/']);
    return this.canActivate;
  }
}
