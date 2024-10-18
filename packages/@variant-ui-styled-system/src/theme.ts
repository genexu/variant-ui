import type { TBasicColors, TColors } from './color';
import { TTypography } from './typography';

export type TBasicTheme = {
  colors: TBasicColors;
};

export type TTheme = {
  colors: TColors;
  typography: TTypography;
};
