import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PicturesComponent } from './pictures.component';

export const PicturesRoutes: Routes = [
  { path: '', component: PicturesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(PicturesRoutes)],
  exports: [RouterModule],
})
export class PicturesRoutingModule {}
