import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { HydrationEffects } from './+state/hydration.effects';
import { hydrationMetaReducer } from './+state/hydration.reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EffectsModule.forFeature([HydrationEffects]),
    StoreModule.forFeature('hydration', hydrationMetaReducer),
  ],
  providers: [HydrationEffects],
})
export class HydrationModule {}
