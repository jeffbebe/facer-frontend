import { Component, Input } from '@angular/core';
import { DownloadedPicture } from '../pictures.interface';

@Component({
  selector: 'app-picture-list-item',
  templateUrl: './picture-list-item.component.html',
  styleUrls: ['./picture-list-item.component.scss'],
})
export class PictureListItemComponent {
  @Input() picture?: DownloadedPicture;
  @Input() deletePicture: (id: string) => void = (): void => {};
}
