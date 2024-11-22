// system
import { createTheme } from '@variant-ui/styled-system';
import { colors } from './color';
import { breakpoints } from './breakpoint';
// components
import { button } from './button';
import { typography } from './typography';
import { textfield } from './textfield';
import { container } from './container';
import { shadows } from './shadows';
import { list } from './list';
// types
import type {
  TComponents,
  TThemeBase,
  TTheme,
} from '@variant-ui/styled-system';

const components: TComponents = {
  button,
  typography,
  textfield,
  container,
  list,
};

const themeBase: TThemeBase = {
  breakpoints,
  shadows,
  colors,
  components,
};
const theme: TTheme = createTheme(themeBase);

export default theme;
