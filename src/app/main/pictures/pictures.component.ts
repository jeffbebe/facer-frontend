import { Component, ViewChild } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  Validators,
} from '@angular/forms';

import { SnackbarService } from '../../../app/shared/services/snackbar.service';
import { PicturesFacade } from './+state/pictures.facade';

@Component({
  selector: 'app-pictures',
  templateUrl: './pictures.component.html',
  styleUrls: ['./pictures.component.scss'],
})
export class PicturesComponent {
  @ViewChild(FormGroupDirective) formDirective?: FormGroupDirective;

  public formGroup = new FormGroup({
    picture: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
  });

  constructor(
    private readonly picturesFacade: PicturesFacade,
    private readonly snackbar: SnackbarService
  ) {}

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
