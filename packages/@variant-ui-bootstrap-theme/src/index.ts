// system
import { createTheme } from '@variant-ui/styled-system';
import { colors } from './color';
import { breakpoints } from './breakpoint';
// components
import { appbar } from './appbar';
import { button } from './button';
import { typography } from './typography';
import { textfield } from './textfield';
import { container } from './container';
import { list } from './list';
// types
import type {
  TComponents,
  TThemeBase,
  TTheme,
  TShadows,
} from '@variant-ui/styled-system';

const components: TComponents = {
  appbar,
  button,
  container,
  typography,
  textfield,
  list,
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
