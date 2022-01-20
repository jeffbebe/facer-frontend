import { Component, ViewChild } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  Validators,
} from '@angular/forms';
import { isEqual, uniqBy } from 'lodash-es';
import { Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';

import { SnackbarService } from '../../../app/shared/services/snackbar.service';
import { PicturesFacade } from './+state/pictures.facade';
import { DetectedFacesFrame, DownloadedPicture } from './pictures.interface';

@Component({
  selector: 'app-pictures',
  templateUrl: './pictures.component.html',
  styleUrls: ['./pictures.component.scss'],
})
export class PicturesComponent {
  @ViewChild(FormGroupDirective) formDirective?: FormGroupDirective;
  public imageURL: string = '';
  public frames: DetectedFacesFrame[] = [];

  public subscription = new Subscription();

  public downloadedPictures?: DownloadedPicture[];

  public formGroup = new FormGroup({
    picture: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
  });

  public detectFaceImage = new FormControl('', [Validators.required]);

  constructor(
    private readonly picturesFacade: PicturesFacade,
    private readonly snackbar: SnackbarService
  ) {}

  public ngOnInit(): void {
    this.picturesFacade.downloadPictures();

    this.subscription.add(
      this.picturesFacade
        .getPictures()
        .pipe(
          tap((pictures) => {
            this.downloadedPictures = pictures;
          })
        )
        .subscribe()
    );
  }

  public onSubmit({ value, invalid }: FormGroup): void {
    if (invalid) {
      return;
    }

    const formData = new FormData();
    formData.append('image', value.picture);
    formData.append('name', value.name);

    this.picturesFacade.uploadPicture({
      formData,
      onSuccess: () => this.onImageUploadSuccess(),
    });
  }

  public detectFaces(): void {
    const formData = new FormData();
    formData.append('image', this.detectFaceImage.value);

    this.picturesFacade.detectFaces({
      formData,
      onSuccess: (frames) => this.onFaceDetectSuccess(frames),
    });
  }

  public onFaceDetectSuccess(frames: DetectedFacesFrame[]): void {
    const tempArray = [frames[0]];

    frames.forEach((frame) => {
      const isDuplicate = tempArray.find((item) =>
        isEqual(item.coordinates, frame.coordinates)
      );
      if (!isDuplicate) tempArray.push(frame);
    });

    this.frames = tempArray;
  }

  // Image Preview
  public showPreview(): void {
    const reader = new FileReader();
    reader.onload = (e) => {
      this.imageURL = e.target?.result as string;
    };
    reader.readAsDataURL(this.detectFaceImage.value);
  }

  public clearPreview(): void {
    this.detectFaceImage.reset();
    this.imageURL = '';
  }

  public onImageUploadSuccess(): void {
    this.formDirective?.resetForm();
    this.picturesFacade.downloadPictures();

    this.snackbar.open({
      message: 'app.main.picturesRoute.onImageUploadSuccess',
    });
  }

  public getFrameParameters(frame: DetectedFacesFrame) {
    const coords = frame.coordinates;
    return {
      top: coords[0] + 'px',
      left: coords[3] + 'px',
      width: coords[1] - coords[3] + 'px',
      height: coords[2] - coords[0] + 'px',
    };
  }
}
