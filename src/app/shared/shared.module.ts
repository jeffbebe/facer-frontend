import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

import { AuthTemplateComponent } from './components/auth-template/auth-template.component';
import { RetrieveErrorPipe } from './pipes/retrieve-error.pipe';
import { SnackbarComponent } from './components/snackbar/snackbar.component';

@NgModule({
  declarations: [AuthTemplateComponent, RetrieveErrorPipe, SnackbarComponent],
  imports: [CommonModule, TranslateModule, MatDialogModule, MatButtonModule],
  exports: [
    CommonModule,
    TranslateModule,
    MatSnackBarModule,
    AuthTemplateComponent,
    RetrieveErrorPipe,
    SnackbarComponent,
  ],
})
export class SharedModule {}
