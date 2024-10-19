import { createPalette } from './color';
import type { TColorBase, TColors } from './color';
import type { TBase } from './base';
import type { TTypography } from '../components/typography';
import type { TTextField } from '../components/textfield';

export type TComponents = {
  typography: TTypography;
  textfield: TTextField;
};

export type TThemeBase = {
  base: TBase;
  colors: TColorBase;
  components: TComponents;
};

export type TTheme = {
  base: TBase;
  colors: TColors;
  components: TComponents;
};

export const createTheme = (themeBase: TThemeBase): TTheme => {
  const palette = createPalette(themeBase.colors.palette);

  const colors: TColors = {
    ...themeBase.colors,
    palette,
  };

  const components = {
    typography: themeBase.components.typography,
    textField: themeBase.components.textfield,
  };

  const theme: TTheme = {
    base: themeBase.base,
    colors,
    components,
  };

  return theme;
};
