import { createSelector } from '@ngrx/store';

import { AppState } from '../../../app.module';

export const picturesSelector = createSelector(
  (state: AppState) => state.pictures,
  (pictures) => pictures.pictures
);

export const isFetchingSelector = createSelector(
  (state: AppState) => state.pictures,
  (pictures) => pictures.isFetching
);
