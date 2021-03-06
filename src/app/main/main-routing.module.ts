import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Paths } from '../shared/dictionaries/url-paths';
import { MainComponent } from './main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: Paths.main.pictures,
        loadChildren: () =>
          import('./pictures/pictures.module').then(
            (module) => module.PicturesModule
          ),
      },
      {
        path: Paths.main.recognition,
        loadChildren: () =>
          import('./recognition/recognition.module').then(
            (module) => module.RecognitionModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
