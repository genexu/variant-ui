import { createTheme } from '@variant-ui/styled-system';
import { colors } from './color';
import { breakpoints } from './breakpoint';
import { shadows } from './shadows';
import { components } from './components';
import type { TThemeBase, TTheme } from '@variant-ui/styled-system';

const themeBase: TThemeBase = {
  breakpoints,
  shadows,
  colors,
  components,
};
const theme: TTheme = createTheme(themeBase);

export default theme;
