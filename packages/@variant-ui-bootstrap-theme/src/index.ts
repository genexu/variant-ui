import { createTheme } from '@variant-ui/styled-system';
import { colors } from './color';
import { breakpoints } from './breakpoint';
import { components } from './components';
import type { TThemeBase, TTheme, TShadows } from '@variant-ui/styled-system';

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
