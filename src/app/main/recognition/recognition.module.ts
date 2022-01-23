import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { WebcamModule } from 'ngx-webcam';

import { SharedModule } from '../../../app/shared/shared.module';
import { RecognitionComponent } from './recognition.component';
import { RecognitionRoutingModule } from './recognition-routing.module';

@NgModule({
  declarations: [RecognitionComponent],
  imports: [
    SharedModule,
    RecognitionRoutingModule,
    WebcamModule,
    MatButtonModule,
    MatDividerModule,
  ],
})
export class RecognitionModule {}
