import { makeEnvironmentProviders } from '@angular/core';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { usePreset } from '@primeuix/themes';
import { Aura } from './aura';
import { Noir } from './noir';

export const Themes = Object.freeze({
  Aura: Aura,
  Noir: Noir,
});

export type Themes = (typeof Themes)[keyof typeof Themes];

type ThemeState = {
  currentTheme: Themes;
};

const initialThemeState: ThemeState = {
  currentTheme: Themes.Aura,
};

export const ThemeStore = signalStore(
  withState(initialThemeState),
  withMethods((store) => ({
    changeTheme() {
      const newTheme =
        store.currentTheme() === Themes.Aura ? Themes.Noir : Themes.Aura;
      patchState(store, () => ({ currentTheme: newTheme }));
      usePreset(newTheme);
    },
  }))
);

export function provideFeatureTheme() {
  return makeEnvironmentProviders([ThemeStore]);
}
