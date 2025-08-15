import { definePreset } from '@primeuix/themes';
import AuraDefault from '@primeuix/themes/aura';

export const Aura = definePreset(AuraDefault, {
  components: {
    toolbar: {
      root: {
        padding: '8px',
      },
    },
  },
});
