import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { AuthLoginComponent } from './auth-login/auth-login.component';
import { AuthEffects } from './+state/auth.effects';
import { authReducer } from './+state/auth.reducers';
import { AuthService } from './+state/auth.service';
import { AuthFacade } from './+state/auth.facade';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthRegisterComponent } from './auth-register/auth-register.component';

@NgModule({
  declarations: [AuthLoginComponent, AuthRegisterComponent],
  imports: [
    SharedModule,
    EffectsModule.forFeature([AuthEffects]),
    StoreModule.forFeature('auth', authReducer),
    MatFormFieldModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    MatInputModule,
    MatButtonModule,
  ],
  providers: [AuthFacade, AuthService, AuthEffects],
})
export class AuthModule {}
