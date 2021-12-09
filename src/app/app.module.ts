import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  HttpClientModule,
  HTTP_INTERCEPTORS,
  HttpClient,
} from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {
  TokenInterceptor,
  UnauthorizedInterceptor,
} from './shared/interceptors';
import { authReducer } from './auth/+state/auth.reducers';
import { AuthFetchKeys, AuthState } from './auth/auth.interface';
import { AuthEffects } from './auth/+state/auth.effects';
import { AuthFacade } from './auth/+state/auth.facade';
import { MatSnackBarModule } from '@angular/material/snack-bar';

const combinedReducers = {
  auth: authReducer,
};

export interface AppState {
  auth: AuthState;
}

export type AppStateKeys = Array<AuthFetchKeys>;

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(combinedReducers),
    StoreDevtoolsModule.instrument({ maxAge: 25 }),
    EffectsModule.forRoot([AuthEffects]),
    BrowserAnimationsModule,
    MatSnackBarModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [
    [
      {
        provide: HTTP_INTERCEPTORS,
        useClass: TokenInterceptor,
        multi: true,
      },
      {
        provide: HTTP_INTERCEPTORS,
        useClass: UnauthorizedInterceptor,
        multi: true,
      },
    ],
    AuthFacade,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
