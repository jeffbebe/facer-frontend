import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

import { AuthLoginComponent } from './auth-login/auth-login.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [AuthLoginComponent],
  imports: [SharedModule, MatFormFieldModule, ReactiveFormsModule],
})
export class AuthModule {}
