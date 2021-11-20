import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [],
  imports: [CommonModule, TranslateModule],
  exports: [CommonModule, TranslateModule, MatSnackBarModule],
})
export class SharedModule {}
