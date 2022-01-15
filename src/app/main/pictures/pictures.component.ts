import {
  Component,
  ElementRef,
  Injectable,
  Pipe,
  SecurityContext,
  ViewChild,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  Validators,
} from '@angular/forms';
import { Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';

import { SnackbarService } from '../../../app/shared/services/snackbar.service';
import { PicturesFacade } from './+state/pictures.facade';
import { DownloadedPicture } from './pictures.interface';

@Component({
  selector: 'app-pictures',
  templateUrl: './pictures.component.html',
  styleUrls: ['./pictures.component.scss'],
})
export class PicturesComponent {
  @ViewChild(FormGroupDirective) formDirective?: FormGroupDirective;

  public subscription = new Subscription();

  public downloadedPictures?: DownloadedPicture[];

  public formGroup = new FormGroup({
    picture: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
  });

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

  public onImageUploadSuccess(): void {
    this.formDirective?.resetForm();

    this.snackbar.open({
      message: 'app.main.picturesRoute.onImageUploadSuccess',
    });
  }
}
