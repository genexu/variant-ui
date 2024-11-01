import { createTheme } from '@variant-ui/styled-system';
import { base, colors } from './base';
import { typography } from './typography';
import { textfield } from './textfield';
import type {
  TComponents,
  TThemeBase,
  TTheme,
  TShadows,
} from '@variant-ui/styled-system';

const components: TComponents = {
  typography,
  textfield,
};

// Boostrap no shadows elevation level
const shadows: TShadows = new Array(24).fill('none') as TShadows;

const themeBase: TThemeBase = {
  base,
  colors,
  shadows,
  components,
};

const theme: TTheme = createTheme(themeBase);

export default theme;
