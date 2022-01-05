import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { SharedModule } from '../shared/shared.module';
import { picturesReducer } from './pictures/+state/pictures.reducers';
import { PicturesEffects } from './pictures/+state/pictures.effects';
import { PicturesService } from './pictures/+state/pictures.service';
import { PicturesFacade } from './pictures/+state/pictures.facade';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';

@NgModule({
  declarations: [MainComponent],
  imports: [
    SharedModule,
    MainRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    MatDividerModule,
    EffectsModule.forFeature([PicturesEffects]),
    StoreModule.forFeature('pictures', picturesReducer),
  ],
  providers: [PicturesFacade, PicturesEffects, PicturesService],
})
export class MainModule {}
