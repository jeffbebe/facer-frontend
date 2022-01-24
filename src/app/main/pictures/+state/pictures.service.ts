import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {
  DeletePictureRequestData,
  DetectedFacesFrame,
  DetectFacesRequestData,
  DownloadedPicture,
  UploadPictureData,
} from '../pictures.interface';

@Injectable({
  providedIn: 'root',
})
export class PicturesService {
  constructor(private readonly http: HttpClient) {}

  public uploadPicture({ formData }: UploadPictureData) {
    return this.http.post<null>('api/image', formData);
  }

  public downloadPictures() {
    return this.http.get<DownloadedPicture[]>('api/image');
  }

  public detectFaces({ formData }: DetectFacesRequestData) {
    return this.http.post<DetectedFacesFrame[]>('api/recognise', formData);
  }

  public deletePicture({ id }: DeletePictureRequestData) {
    return this.http.delete<DetectedFacesFrame[]>(`api/image/${id}`);
  }
}
