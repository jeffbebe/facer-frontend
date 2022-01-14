import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  HttpClientModule,
  HTTP_INTERCEPTORS,
  HttpClient,
} from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { MetaReducer, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TimeoutInterceptor, TokenInterceptor } from './shared/interceptors';
import { authReducer } from './auth/+state/auth.reducers';
import { AuthFetchKeys, AuthState } from './auth/auth.interface';
import { AuthEffects } from './auth/+state/auth.effects';
import { AuthFacade } from './auth/+state/auth.facade';
import { AuthService } from './auth/+state/auth.service';
import {
  PicturesFetchKeys,
  PicturesState,
} from './main/pictures/pictures.interface';
import { picturesReducer } from './main/pictures/+state/pictures.reducers';
import { hydrationMetaReducer } from './shared/hydration/+state/hydration.reducer';
import { HydrationModule } from './shared/hydration/hydration.module';

const combinedReducers = {
  auth: authReducer,
  pictures: picturesReducer,
};

export interface AppState {
  auth: AuthState;
  pictures: PicturesState;
}

export type AppStateKeys = Array<AuthFetchKeys | PicturesFetchKeys>;

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export const metaReducers: MetaReducer[] = [hydrationMetaReducer];

@NgModule({
  declarations: [AppComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(combinedReducers, { metaReducers }),
    StoreDevtoolsModule.instrument({ maxAge: 25 }),
    EffectsModule.forRoot([AuthEffects]),
    BrowserAnimationsModule,
    MatSnackBarModule,
    HydrationModule,
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
        useClass: TimeoutInterceptor,
        multi: true,
      },
    ],
    AuthFacade,
    AuthService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
