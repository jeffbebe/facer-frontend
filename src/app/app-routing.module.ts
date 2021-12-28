import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AbsolutePaths } from './shared/dictionaries/url-paths';
import { AuthGuard } from './shared/guards/auth.guard';
import { MainGuard } from './shared/guards/main.guard';

const routes: Routes = [
  { path: '', redirectTo: AbsolutePaths.main.default, pathMatch: 'full' },
  {
    path: 'auth',
    canActivateChild: [AuthGuard],
    loadChildren: () =>
      import('./auth/auth.module').then((module) => module.AuthModule),
  },
  {
    path: 'main',
    canActivateChild: [MainGuard],
    loadChildren: () =>
      import('./main/main.module').then((module) => module.MainModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
