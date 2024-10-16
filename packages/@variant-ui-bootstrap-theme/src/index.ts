import { transformBasicPaletteToPalette } from '@variant-ui/styled-system';
import type { TTheme } from '@variant-ui/styled-system';

const palette = transformBasicPaletteToPalette({
  red: '#dc3545',
  purple: '#6f42c1',
  blue: '#0d6efd',
  green: '#198754',
  yellow: '#ffc107',
  orange: '#fd7e14',
  gray: '#9E9E9E',
});

const colors = {
  primary: palette.blue[500],
  secondary: palette.gray[600],
  success: palette.green[500],
  error: palette.red[500],
  warning: palette.yellow[500],
  info: palette.blue[500],
  palette,
};

const theme: TTheme = {
  colors,
};

export default theme;
