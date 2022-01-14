import { createAction, props } from '@ngrx/store';

import { UploadPictureData } from '../pictures.interface';

export const uploadPictureRequest = createAction(
  '[Pictures] Upload Picture Request',
  props<{ payload: UploadPictureData }>()
);

export const uploadPictureSuccess = createAction(
  '[Pictures] Upload Picture Success'
);

export const uploadPictureFailure = createAction(
  '[Pictures] Upload Picture Failure'
);

export const downloadPicturesRequest = createAction(
  '[Pictures] Download Pictures Request'
);

export const downloadPicturesSuccess = createAction(
  '[Pictures] Download Pictures Success'
);

export const downloadPicturesFailure = createAction(
  '[Pictures] Download Pictures Failure'
);

export const picturesActionTypes = {
  uploadPictureRequest,
  uploadPictureSuccess,
  uploadPictureFailure,
  downloadPicturesRequest,
  downloadPicturesSuccess,
  downloadPicturesFailure,
};
