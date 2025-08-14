import { Aura } from './aura';
import { Noir } from './noir';

export const Themes = Object.freeze({
  Aura: Aura,
  Noir: Noir,
});

export type Themes = (typeof Themes)[keyof typeof Themes];
