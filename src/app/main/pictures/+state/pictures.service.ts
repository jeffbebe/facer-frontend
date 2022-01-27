import { environment } from '$environment';
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
    return this.http.post<null>(`${environment.backendUrl}/image`, formData);
  }

  public downloadPictures() {
    return this.http.get<DownloadedPicture[]>(
      `${environment.backendUrl}/image`
    );
  }

  public detectFaces({ formData }: DetectFacesRequestData) {
    return this.http.post<DetectedFacesFrame[]>(
      `${environment.backendUrl}/recognise`,
      formData
    );
  }

  public deletePicture({ id }: DeletePictureRequestData) {
    return this.http.delete<DetectedFacesFrame[]>(
      `${environment.backendUrl}/image/${id}`
    );
  }

  public deletePicture({ id }: DeletePictureRequestData) {
    return this.http.delete<DetectedFacesFrame[]>(`api/image/${id}`);
  }
}
