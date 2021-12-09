import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Paths } from '../shared/dictionaries/url-paths';
import { AuthLoginComponent } from './auth-login/auth-login.component';
import { AuthRegisterComponent } from './auth-register/auth-register.component';

const routes: Routes = [
  { path: Paths.auth.login, component: AuthLoginComponent },
  { path: Paths.auth.register, component: AuthRegisterComponent },
  { path: '**', redirectTo: Paths.auth.login },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
