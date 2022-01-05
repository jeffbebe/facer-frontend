import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, concatMap, map } from 'rxjs/operators';

import { HttpErrorService } from '../../../shared/services/http-error.service';
import {
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
}
