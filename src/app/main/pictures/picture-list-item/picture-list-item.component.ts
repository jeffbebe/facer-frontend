import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-picture-list-item',
  templateUrl: './picture-list-item.component.html',
  styleUrls: ['./picture-list-item.component.scss'],
})
export class PictureListItemComponent implements OnInit {
  @Input() imgBuffer?: ArrayBuffer;
  @Input() imgName: string = '';
  constructor() {}

  ngOnInit(): void {}
}
