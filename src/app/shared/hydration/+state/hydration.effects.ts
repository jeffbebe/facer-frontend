import { Actions, createEffect, ofType, OnInitEffects } from '@ngrx/effects';
import { distinctUntilChanged, map, switchMap, tap } from 'rxjs/operators';
import { Action, Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { pick } from 'lodash-es';

import { AppState } from '../../../app.module';
import * as HydrationActions from './hydration.actions';

@Injectable()
export class HydrationEffects implements OnInitEffects {
  hydrate$ = createEffect(() =>
    this.action$.pipe(
      ofType(HydrationActions.hydrate),
      map(() => {
        const storageValue = localStorage.getItem('state');
        if (storageValue) {
          try {
            const state = JSON.parse(storageValue);
            return HydrationActions.hydrateSuccess({ state });
          } catch {
            localStorage.removeItem('state');
          }
        }
        return HydrationActions.hydrateFailure();
      })
    )
  );

  serialize$ = createEffect(
    () =>
      this.action$.pipe(
        ofType(
          HydrationActions.hydrateSuccess,
          HydrationActions.hydrateFailure
        ),
        switchMap(() => this.store),
        distinctUntilChanged(),
        tap((state) =>
          localStorage.setItem('state', JSON.stringify(pick(state, 'auth')))
        )
      ),
    { dispatch: false }
  );

  constructor(private action$: Actions, private store: Store<AppState>) {}

  ngrxOnInitEffects(): Action {
    return HydrationActions.hydrate();
  }
}
