import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { AuthTemplateComponent } from './auth-template/auth-template.component';

@NgModule({
  declarations: [AuthTemplateComponent],
  imports: [CommonModule, TranslateModule],
  exports: [
    CommonModule,
    TranslateModule,
    MatSnackBarModule,
    AuthTemplateComponent,
  ],
})
export class SharedModule {}
