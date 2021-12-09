import { Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AbsolutePaths } from 'src/app/shared/dictionaries/url-paths';
import { AuthFacade } from '../+state/auth.facade';

@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AuthLoginComponent {
  public registerPath = AbsolutePaths.auth.register;

  public formGroup = new FormGroup({
    emailAddress: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  constructor(
    private authFacade: AuthFacade,
    private readonly router: Router
  ) {}

  public navigateToRegister(): void {
    this.router.navigate([this.registerPath]);
  }

  public onSubmit({ value, invalid }: FormGroup): void {
    if (invalid) {
      return;
    }

    const payload = {
      emailAddress: value.emailAddress,
      password: value.password,
    };
    this.authFacade.loginUser(payload);
  }
}
