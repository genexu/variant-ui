import { createTheme } from '@variant-ui/styled-system';
import { colors } from './color';
import { breakpoints } from './breakpoint';
import { typography } from './typography';
import { textfield } from './textfield';
import { container } from './container';
import { shadows } from './shadows';
import type {
  TComponents,
  TThemeBase,
  TTheme,
} from '@variant-ui/styled-system';

const components: TComponents = {
  typography,
  textfield,
  container,
};

const themeBase: TThemeBase = {
  breakpoints,
  shadows,
  colors,
  components,
};
const theme: TTheme = createTheme(themeBase);

export default theme;
