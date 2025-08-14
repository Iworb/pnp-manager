import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';
import { providePrimeNG } from 'primeng/config';
import { appRoutes } from './app.routes';
import { provideFeatureProject } from './features/project';
import { Themes } from './themes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimationsAsync(),
    provideBrowserGlobalErrorListeners(),
    providePrimeNG({
      theme: {
        preset: Themes.Aura,
      },
    }),
    provideRouter(appRoutes),
    provideZoneChangeDetection({ eventCoalescing: true }),

    provideFeatureProject(),
  ],
};
