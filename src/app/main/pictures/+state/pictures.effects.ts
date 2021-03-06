import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, concatMap, map } from 'rxjs/operators';

import { HttpErrorService } from '../../../shared/services/http-error.service';
import {
  deletePictureFailure,
  deletePictureRequest,
  deletePictureSuccess,
  detectFacesFailure,
  detectFacesRequest,
  detectFacesSuccess,
  downloadPicturesFailure,
  downloadPicturesRequest,
  downloadPicturesSuccess,
  uploadPictureFailure,
  uploadPictureRequest,
  uploadPictureSuccess,
} from './pictures.actions';
import { PicturesService } from './pictures.service';

@Injectable()
export class PicturesEffects {
  constructor(
    private readonly picturesService: PicturesService,
    private readonly actions$: Actions,
    private readonly httpErrorService: HttpErrorService
  ) {}

  public uploadPictureRequest$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(uploadPictureRequest),
      concatMap(({ payload }) => {
        return this.picturesService.uploadPicture(payload).pipe(
          map(() => {
            payload.onSuccess();
            return uploadPictureSuccess();
          }),
          catchError((httpError: HttpErrorResponse) => {
            this.httpErrorService.handleErrors(httpError);
            return of(uploadPictureFailure());
          })
        );
      })
    );
  });

  public downloadPicturesRequest$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(downloadPicturesRequest),
      concatMap(() => {
        return this.picturesService.downloadPictures().pipe(
          map((pictures) => {
            return downloadPicturesSuccess({ pictures });
          }),
          catchError((httpError: HttpErrorResponse) => {
            this.httpErrorService.handleErrors(httpError);
            return of(downloadPicturesFailure());
          })
        );
      })
    );
  });

  public detectFacesRequest$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(detectFacesRequest),
      concatMap(({ payload }) => {
        return this.picturesService.detectFaces(payload).pipe(
          map((response) => {
            payload.onSuccess(response);
            return detectFacesSuccess();
          }),
          catchError((httpError: HttpErrorResponse) => {
            !payload.terminateErrors &&
              this.httpErrorService.handleErrors(httpError);
            return of(detectFacesFailure());
          })
        );
      })
    );
  });

  public deletePictureRequest$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(deletePictureRequest),
      concatMap(({ payload }) => {
        return this.picturesService.deletePicture(payload).pipe(
          map(() => {
            payload.onSuccess();
            return deletePictureSuccess();
          }),
          catchError((httpError: HttpErrorResponse) => {
            this.httpErrorService.handleErrors(httpError);
            return of(deletePictureFailure());
          })
        );
      })
    );
  });
}
