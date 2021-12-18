import { createSelector } from '@ngrx/store';

import { AppState } from '../../app.module';

export const userSelector = createSelector(
  (state: AppState) => state.auth,
  (auth) => auth.user
);

export const isFetchingSelector = createSelector(
  (state: AppState) => state.auth,
  (auth) => auth.isFetching
);
