// system
import { createTheme } from '@variant-ui/styled-system';
import { colors } from './color';
import { breakpoints } from './breakpoint';
// components
import { button } from './button';
import { typography } from './typography';
import { textfield } from './textfield';
import { container } from './container';
// types
import type {
  TComponents,
  TThemeBase,
  TTheme,
  TShadows,
} from '@variant-ui/styled-system';

const components: TComponents = {
  button,
  container,
  typography,
  textfield,
};

// Boostrap no shadows elevation level
const shadows: TShadows = new Array(24).fill('none') as TShadows;

const themeBase: TThemeBase = {
  breakpoints,
  colors,
  shadows,
  components,
};

const theme: TTheme = createTheme(themeBase);

export default theme;
