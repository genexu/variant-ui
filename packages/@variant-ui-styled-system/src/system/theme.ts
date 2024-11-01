import { createPalette } from './color';
import type { TBase } from './base';
import type { TColorBase, TColors } from './color';
import type { TShadows } from './shadow';
import type { TTypography } from '../components/typography';
import type { TTextField } from '../components/textfield';

export type TComponents = {
  typography: TTypography;
  textfield: TTextField;
};

export type TThemeBase = {
  base: TBase;
  colors: TColorBase;
  shadows: TShadows;
  components: TComponents;
};

export type TTheme = {
  base: TBase;
  colors: TColors;
  shadows: TShadows;
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
    textfield: themeBase.components.textfield,
  };

  const theme: TTheme = {
    base: themeBase.base,
    colors,
    shadows: themeBase.shadows,
    components,
  };

  return theme;
};
