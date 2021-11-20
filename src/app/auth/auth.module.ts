import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { AuthLoginComponent } from './auth-login/auth-login.component';
import { SharedModule } from '../shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [AuthLoginComponent],
  imports: [
    SharedModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    MatInputModule,
    MatButtonModule,
  ],
})
export class AuthModule {}
