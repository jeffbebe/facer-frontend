import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppState } from '../../../app.module';
import {
  deletePictureRequest,
  detectFacesRequest,
  downloadPicturesRequest,
  uploadPictureRequest,
} from './pictures.actions';
import {
  DeletePictureRequestData,
  DetectFacesRequestData,
  DownloadedPicture,
  UploadPictureData,
} from '../pictures.interface';
import { picturesSelector } from './pictures.selector';

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

  public deletePicture(payload: DeletePictureRequestData): void {
    this.store.dispatch(deletePictureRequest({ payload }));
  }
}
