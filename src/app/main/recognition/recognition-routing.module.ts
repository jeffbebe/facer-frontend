import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RecognitionComponent } from './recognition.component';

export const RecognitionRoutes: Routes = [
  { path: '', component: RecognitionComponent },
];

@NgModule({
  imports: [RouterModule.forChild(RecognitionRoutes)],
  exports: [RouterModule],
})
export class RecognitionRoutingModule {}
