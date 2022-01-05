import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { UploadPictureData } from '../pictures.interface';

@Injectable({
  providedIn: 'root',
})
export class PicturesService {
  constructor(private readonly http: HttpClient) {}

  public uploadPicture({ formData }: UploadPictureData) {
    return this.http.post<null>('api/image', formData);
  }
}
