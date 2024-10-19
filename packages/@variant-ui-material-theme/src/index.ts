import { createTheme } from '@variant-ui/styled-system';
import { base, colors } from './base';
import { typography } from './typography';
import { textfield } from './textfield';
import type {
  TComponents,
  TThemeBase,
  TTheme,
} from '@variant-ui/styled-system';

const components: TComponents = {
  typography,
  textfield,
};

const themeBase: TThemeBase = {
  base,
  colors,
  components,
};

const theme: TTheme = createTheme(themeBase);

export default theme;
