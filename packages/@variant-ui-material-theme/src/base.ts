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
  red: '#F44336',
  purple: '#9C27B0',
  blue: '#2196F3',
  green: '#4CAF50',
  yellow: '#FFEB3B',
  orange: '#FF9800',
  gray: '#9E9E9E',
};

const palette = createPalette(paletteBase);

export const colors: TColorBase = {
  primary: palette.blue[500],
  secondary: palette.purple[200],
  success: palette.green[500],
  error: palette.red[500],
  warning: palette.yellow[500],
  info: palette.blue[500],
  white: '#FFFFFF',
  black: '#121212',
  palette: paletteBase,
};
