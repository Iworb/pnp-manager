import { provideHttpClient } from '@angular/common/http';
import {
  ApplicationConfig,
  isDevMode,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';
import { provideTransloco } from '@jsverse/transloco';
import { providePrimeNG } from 'primeng/config';
import { appRoutes } from './app.routes';
import { provideFeatureProject } from './features/project';
import { TranslocoHttpLoader } from './i18n/transloco-loader';
import { provideFeatureTheme, Themes } from './themes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimationsAsync(),
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(),
    providePrimeNG({
      theme: {
        preset: Themes.Aura,
      },
    }),
    provideRouter(appRoutes),
    provideTransloco({
      config: {
        availableLangs: [
          { id: 'en', label: 'English' },
          { id: 'ru', label: 'Русский' },
        ],
        defaultLang: 'en',
        // Remove this option if your application doesn't support changing language in runtime.
        reRenderOnLangChange: true,
        prodMode: !isDevMode(),
      },
      loader: TranslocoHttpLoader,
    }),
    provideZoneChangeDetection({ eventCoalescing: true }),

    provideFeatureProject(),
    provideFeatureTheme(),
  ],
};
