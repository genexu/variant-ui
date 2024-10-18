import { createPalette } from './color';
import { TTypography } from './typography';
import type { TColorBase, TColors } from './color';

export type TThemeBase = {
  colors: TColorBase;
  typography: TTypography;
};

export type TTheme = {
  colors: TColors;
  typography: TTypography;
};

export const createTheme = (base: TThemeBase): TTheme => {
  const palette = createPalette(base.colors.palette);

  const colors: TColors = {
    ...base.colors,
    palette,
  };

  const typography = base.typography;

  const theme: TTheme = {
    colors,
    typography,
  };

  return theme;
};
