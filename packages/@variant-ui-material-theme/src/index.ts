import { createPalette, createTheme } from '@variant-ui/styled-system';
import type {
  TColorBase,
  TPaletteBase,
  TThemeBase,
  TTheme,
  TTypographyVariant,
  TTypographyProps,
} from '@variant-ui/styled-system';

const paletteBase: TPaletteBase = {
  red: '#F44336',
  purple: '#9C27B0',
  blue: '#2196F3',
  green: '#4CAF50',
  yellow: '#FFEB3B',
  orange: '#FF9800',
  gray: '#9E9E9E',
};

const palette = createPalette(paletteBase);

const colors: TColorBase = {
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

const fontWeightMedium = 500;
const fontWeightRegular = 400;
const fontWeightLight = 300;

const typography: Record<TTypographyVariant, TTypographyProps> = {
  h1: {
    fontSize: 96,
    lineHeight: 1.167,
    fontWeight: fontWeightLight,
    fontStyle: 'normal',
  },
  h2: {
    fontSize: 60,
    lineHeight: 1.2,
    fontWeight: fontWeightLight,
    fontStyle: 'normal',
  },
  h3: {
    fontSize: 48,
    lineHeight: 1.167,
    fontWeight: fontWeightRegular,
    fontStyle: 'normal',
  },
  h4: {
    fontSize: 34,
    lineHeight: 1.235,
    fontWeight: fontWeightRegular,
    fontStyle: 'normal',
  },
  h5: {
    fontSize: 24,
    lineHeight: 1.334,
    fontWeight: fontWeightRegular,
    fontStyle: 'normal',
  },
  h6: {
    fontSize: 20,
    lineHeight: 1.6,
    fontWeight: fontWeightMedium,
    fontStyle: 'normal',
  },
  p: {
    fontSize: 14,
    lineHeight: 1.5,
    fontWeight: fontWeightRegular,
    fontStyle: 'normal',
  },
  span: {
    fontSize: 14,
    lineHeight: 1.5,
    fontWeight: fontWeightRegular,
    fontStyle: 'normal',
  },
};

const themeBase: TThemeBase = {
  colors,
  typography,
};

const theme: TTheme = createTheme(themeBase);

export default theme;
