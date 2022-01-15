import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { DownloadedPicture, UploadPictureData } from '../pictures.interface';

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
}
