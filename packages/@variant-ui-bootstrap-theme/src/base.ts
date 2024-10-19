import { createPalette } from '@variant-ui/styled-system';
import type {
  TBase,
  TColorBase,
  TPaletteBase,
} from '@variant-ui/styled-system';

export const base: TBase = {
  borderRadius: 4,
};

export const paletteBase: TPaletteBase = {
  red: '#dc3545',
  purple: '#6f42c1',
  blue: '#0d6efd',
  green: '#198754',
  yellow: '#ffc107',
  orange: '#fd7e14',
  gray: '#9E9E9E',
};

const palette = createPalette(paletteBase);

export const colors: TColorBase = {
  primary: palette.blue[500],
  secondary: palette.gray[600],
  success: palette.green[500],
  error: palette.red[500],
  warning: palette.yellow[500],
  info: palette.blue[500],
  white: '#FFFFFF',
  black: '#121212',
  palette: paletteBase,
};
