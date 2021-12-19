import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';

import { AuthTemplateComponent } from './components/auth-template/auth-template.component';
import { SnackbarComponent } from './components/snackbar/snackbar.component';
import { RetrieveErrorPipe } from './pipes/retrieve-error.pipe';
import { NavComponent } from './components/nav/nav.component';

@NgModule({
  declarations: [
    AuthTemplateComponent,
    RetrieveErrorPipe,
    SnackbarComponent,
    NavComponent,
  ],
  imports: [
    CommonModule,
    TranslateModule,
    MatDialogModule,
    MatButtonModule,
    MatListModule,
    RouterModule,
  ],
  exports: [
    CommonModule,
    TranslateModule,
    MatSnackBarModule,
    AuthTemplateComponent,
    RetrieveErrorPipe,
    SnackbarComponent,
    NavComponent,
  ],
})
export class SharedModule {}
