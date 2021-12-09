import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { get, isEmpty, omit } from 'lodash-es';

export const passwordsMatchValidator: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  const passwordControl = control.get('password');
  const confirmPasswordControl = control.get('confirmPassword');

  const password = passwordControl?.value as string;
  const confirmPassword = confirmPasswordControl?.value as string;

  const hasError = password !== confirmPassword;

  const otherErrors = omit(
    get(confirmPasswordControl, 'errors', {}),
    'matchingPasswords'
  );

  const newErrors = {
    ...otherErrors,
    matchingPasswords: true,
  };

  const hasOtherErrors = !isEmpty(otherErrors);
  confirmPasswordControl?.setErrors(
    hasError ? newErrors : hasOtherErrors ? otherErrors : null
  );

  return null;
};
