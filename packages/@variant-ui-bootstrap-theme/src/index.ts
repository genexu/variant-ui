import { createTheme } from '@variant-ui/styled-system';
import { colors } from './color';
import { typography } from './typography';
import { textfield } from './textfield';
import type {
  TBreakpointBase,
  TComponents,
  TThemeBase,
  TTheme,
  TShadows,
} from '@variant-ui/styled-system';

const breakpoints: TBreakpointBase = [
  Number.NEGATIVE_INFINITY,
  576,
  768,
  992,
  1200,
  1400,
];

const components: TComponents = {
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
