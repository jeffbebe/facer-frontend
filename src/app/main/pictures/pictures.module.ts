import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { NgxMatFileInputModule } from '@angular-material-components/file-input';

import { PicturesComponent } from './pictures.component';
import { SharedModule } from '../../../app/shared/shared.module';
import { PicturesRoutingModule } from './pictures-routing.module';
import { PictureListComponent } from './picture-list/picture-list.component';
import { PictureListItemComponent } from './picture-list-item/picture-list-item.component';

@NgModule({
  declarations: [
    PicturesComponent,
    PictureListComponent,
    PictureListItemComponent,
  ],
  imports: [
    SharedModule,
    PicturesRoutingModule,
    MatCardModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatDividerModule,
    NgxMatFileInputModule,
  ],
})
export class PicturesModule {}
