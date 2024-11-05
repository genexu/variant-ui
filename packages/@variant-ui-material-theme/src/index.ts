import { createTheme } from '@variant-ui/styled-system';
import { base, colors } from './base';
import { typography } from './typography';
import { textfield } from './textfield';
import { shadows } from './shadows';
import type {
  TBreakpointBase,
  TComponents,
  TThemeBase,
  TTheme,
} from '@variant-ui/styled-system';

const breakpoints: TBreakpointBase = [
  Number.NEGATIVE_INFINITY,
  600,
  900,
  1200,
  1536,
  Number.POSITIVE_INFINITY,
];

const components: TComponents = {
  typography,
  textfield,
};

const themeBase: TThemeBase = {
  base,
  breakpoints,
  shadows,
  colors,
  components,
};
const theme: TTheme = createTheme(themeBase);

export default theme;
