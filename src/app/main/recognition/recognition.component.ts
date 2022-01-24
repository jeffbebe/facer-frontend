import { Component, OnDestroy, ViewEncapsulation } from '@angular/core';
import { isEqual } from 'lodash-es';
import { WebcamImage } from 'ngx-webcam';
import { Observable, Subject } from 'rxjs';

import { getFramePosition } from '../../../app/shared/utils/get-frame-position.util';
import { getNamePosition } from '../../../app/shared/utils/get-name-position.util';
import { PicturesFacade } from '../pictures/+state/pictures.facade';
import { DetectedFacesFrame } from '../pictures/pictures.interface';

@Component({
  selector: 'app-recognition',
  templateUrl: './recognition.component.html',
  styleUrls: ['./recognition.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class RecognitionComponent implements OnDestroy {
  public trigger: Subject<void> = new Subject<void>();
  public frames: DetectedFacesFrame[] = [];

  public getFramePosition = getFramePosition;
  public getNamePosition = getNamePosition;

  public intervalId = setInterval(() => this.trigger.next(), 800);

  constructor(private readonly picturesFacade: PicturesFacade) {}

  public ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

  public handleImage(webcamImage: WebcamImage): void {
    const image = this.dataURItoBlob(webcamImage.imageAsDataUrl);
    const formData = new FormData();
    formData.append('image', image);

    this.picturesFacade.detectFaces({
      formData,
      terminateErrors: true,
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

  public triggerSnapshot(): void {}

  public dataURItoBlob(dataURI: string) {
    var binary = atob(dataURI.split(',')[1]);
    var array = [];
    for (var i = 0; i < binary.length; i++) {
      array.push(binary.charCodeAt(i));
    }
    return new Blob([new Uint8Array(array)], { type: 'image/jpeg' });
  }
}
