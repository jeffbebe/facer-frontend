import { Component, Input } from '@angular/core';
import { DownloadedPicture } from '../pictures.interface';

@Component({
  selector: 'app-picture-list',
  templateUrl: './picture-list.component.html',
  styleUrls: ['./picture-list.component.scss'],
})
export class PictureListComponent {
  @Input() downloadedPictures?: DownloadedPicture[];
  @Input() deletePicture?: (id: string) => void;

  public trackByKey(index: number, item: DownloadedPicture) {
    return item.name;
  }
}
