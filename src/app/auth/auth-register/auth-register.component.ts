import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthFacade } from '../+state/auth.facade';

import { AbsolutePaths } from '../../shared/dictionaries/url-paths';
import { passwordsMatchValidator } from '../validators/password-match.validator';

@Component({
  selector: 'app-auth-register',
  templateUrl: './auth-register.component.html',
  styleUrls: ['./auth-register.component.scss'],
})
export class AuthRegisterComponent {
  public loginPath = AbsolutePaths.auth.login;

  public formGroup = new FormGroup(
    {
      emailAddress: new FormControl('', [
        Validators.required,
        Validators.email,
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      confirmPassword: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    },
    { validators: passwordsMatchValidator }
  );

  constructor(
    private readonly router: Router,
    private readonly authFacade: AuthFacade
  ) {}

  public navigateToLogin(): void {
    this.router.navigate([this.loginPath]);
  }

  public onSubmit({ value, invalid }: FormGroup): void {
    if (invalid) {
      return;
    }
    const payload = {
      emailAddress: value.emailAddress,
      password: value.password,
    };
    this.authFacade.registerUser(payload);
  }
}
