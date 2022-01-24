import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from '../../../app.module';
import {
  detectFacesRequest,
  downloadPicturesRequest,
  uploadPictureRequest,
} from './pictures.actions';
import {
  DetectFacesRequestData,
  DownloadedPicture,
  UploadPictureData,
} from '../pictures.interface';
import { picturesSelector } from './pictures.selector';
import { Observable } from 'rxjs';

@Injectable()
export class PicturesFacade {
  constructor(private readonly store: Store<AppState>) {}

  public uploadPicture(payload: UploadPictureData): void {
    this.store.dispatch(uploadPictureRequest({ payload }));
  }

  public downloadPictures(): void {
    this.store.dispatch(downloadPicturesRequest());
  }

  public getPictures(): Observable<DownloadedPicture[]> {
    return this.store.select(picturesSelector);
  }

  public detectFaces(payload: DetectFacesRequestData): void {
    this.store.dispatch(detectFacesRequest({ payload }));
  }
}
