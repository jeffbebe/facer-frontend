import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { PicturesFacade } from './+state/pictures.facade';
import { Event } from './pictures.interface';

@Component({
  selector: 'app-pictures',
  templateUrl: './pictures.component.html',
  styleUrls: ['./pictures.component.scss'],
})
export class PicturesComponent {
  public formGroup = new FormGroup({
    picture: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
  });

  constructor(private readonly picturesFacade: PicturesFacade) {}

  public onSubmit({ value, invalid }: FormGroup): void {
    console.log({ value });
    if (invalid) {
      return;
    }

    const formData = new FormData();
    formData.append('image', value.picture);
    formData.append('name', value.name);

    this.picturesFacade.uploadPicture({ formData });
  }
}
