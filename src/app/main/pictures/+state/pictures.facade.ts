import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from '../../../app.module';
import { uploadPictureRequest } from './pictures.actions';
import { UploadPictureData } from '../pictures.interface';

@Injectable()
export class PicturesFacade {
  constructor(private readonly store: Store<AppState>) {}

  public uploadPicture(payload: UploadPictureData): void {
    this.store.dispatch(uploadPictureRequest({ payload }));
  }

  // public getUser(): Observable<User> {
  //   return this.store.select(userSelector);
  // }
}
