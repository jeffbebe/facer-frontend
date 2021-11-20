import { Pipe, PipeTransform } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { isObject } from 'lodash-es';

const DEFAULT_EXCEPTIONS = ['pattern'] as const;

@Pipe({
  name: 'retrieveError',
  pure: false,
})
export class RetrieveErrorPipe implements PipeTransform {
  private value?: string;

  constructor(private translateService: TranslateService) {}

  public transform(
    form: FormGroup,
    controlName: string,
    exceptionsPattern: readonly string[] = DEFAULT_EXCEPTIONS
  ): string {
    const control = form.get(controlName);
    const slicedControlName = controlName.substring(
      controlName.indexOf('.') + 1
    );
    const errors = control?.errors ?? {};
    const keys = Object.keys(errors);
    const first = keys[0];
    const path = exceptionsPattern.includes(first)
      ? `app.errors.forms.${slicedControlName}.${first}`
      : `app.errors.forms.${first}`;
    if (keys.length > 0) {
      const errorParams = errors[first];
      this.translateService
        .get(path, isObject(errorParams) ? errorParams : undefined)
        .subscribe((value: string) => {
          this.value = value;
        })
        .unsubscribe();
    }

    return this.value ?? '';
  }
}
