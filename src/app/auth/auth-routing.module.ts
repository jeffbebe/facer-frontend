import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Paths } from '../shared/dictionaries/url-paths';
import { AuthLoginComponent } from './auth-login/auth-login.component';

const routes: Routes = [
  { path: Paths.auth.login, component: AuthLoginComponent },
  { path: '**', redirectTo: Paths.auth.login },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
