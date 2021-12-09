import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';
import { first, tap } from 'rxjs/operators';

import { SnackbarComponent } from '../components/snackbar/snackbar.component';

export interface SnackBarConfig {
  message: string | string[];
  buttonMessage?: string;
  config?: MatSnackBarConfig;
}

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  constructor(
    private snackBar: MatSnackBar,
    private translateService: TranslateService
  ) {}

  private joinMessage(message: string[]): string {
    return message.join('\n');
  }

  public open({
    message,
    buttonMessage = 'OK',
    config = {
      verticalPosition: 'bottom',
      horizontalPosition: 'right',
      duration: 4000,
    },
  }: SnackBarConfig): void {
    if (!Array.isArray(message)) {
      this.translateService
        .get(message)
        .pipe(
          first(),
          tap((snackbarMessage) => {
            this.snackBar.openFromComponent(SnackbarComponent, {
              ...config,
              data: { message: snackbarMessage, buttonMessage },
            });
          })
        )
        .subscribe();
    } else {
      this.snackBar.openFromComponent(SnackbarComponent, {
        ...config,
        data: { message: this.joinMessage(message), buttonMessage },
      });
    }
  }
}
