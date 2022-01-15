import { createReducer, on } from '@ngrx/store';

import { filterKey } from '../../../shared/utils/filter-fetch-keys.util';
import { PicturesState } from '../pictures.interface';
import { picturesActionTypes } from './pictures.actions';

export const initialState: PicturesState = {
  isFetching: [],
  pictures: [],
};

export const picturesReducer = createReducer(
  initialState,
  on(picturesActionTypes.uploadPictureRequest, (state) => {
    return {
      ...state,
      isFetching: [...state.isFetching, 'uploadPicture'],
    };
  }),
  on(picturesActionTypes.uploadPictureSuccess, (state) => {
    return {
      ...state,
      isFetching: filterKey(state.isFetching, 'uploadPicture'),
    };
  }),
  on(picturesActionTypes.uploadPictureFailure, (state) => {
    return {
      ...state,
      isFetching: filterKey(state.isFetching, 'uploadPicture'),
    };
  }),
  on(picturesActionTypes.downloadPicturesRequest, (state) => {
    return {
      ...state,
      isFetching: [...state.isFetching, 'downloadPictures'],
    };
  }),
  on(picturesActionTypes.downloadPicturesSuccess, (state, action) => {
    return {
      ...state,
      pictures: action.pictures,
      isFetching: filterKey(state.isFetching, 'downloadPictures'),
    };
  }),
  on(picturesActionTypes.downloadPicturesFailure, (state) => {
    return {
      ...state,
      isFetching: filterKey(state.isFetching, 'downloadPictures'),
    };
  })
);
