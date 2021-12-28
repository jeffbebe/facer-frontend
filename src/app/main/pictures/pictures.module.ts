import { NgModule } from '@angular/core';
import { PicturesComponent } from './pictures.component';

import { SharedModule } from '../../../app/shared/shared.module';
import { PicturesRoutingModule } from './pictures-routing.module';

@NgModule({
  declarations: [PicturesComponent],
  imports: [SharedModule, PicturesRoutingModule],
})
export class PicturesModule {}
