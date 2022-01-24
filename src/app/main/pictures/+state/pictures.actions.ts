import { createAction, props } from '@ngrx/store';

import {
  DetectFacesRequestData,
  DownloadedPicture,
  UploadPictureData,
} from '../pictures.interface';

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
  '[Pictures] Download Pictures Success',
  props<{ pictures: DownloadedPicture[] }>()
);

export const downloadPicturesFailure = createAction(
  '[Pictures] Download Pictures Failure'
);

export const detectFacesRequest = createAction(
  '[Pictures] Detect Faces Request',
  props<{ payload: DetectFacesRequestData }>()
);

export const detectFacesSuccess = createAction(
  '[Pictures] Detect Faces Success'
);

export const detectFacesFailure = createAction(
  '[Pictures] Detect Faces Failure'
);

export const picturesActionTypes = {
  uploadPictureRequest,
  uploadPictureSuccess,
  uploadPictureFailure,
  downloadPicturesRequest,
  downloadPicturesSuccess,
  downloadPicturesFailure,
  detectFacesRequest,
  detectFacesSuccess,
  detectFacesFailure,
};
