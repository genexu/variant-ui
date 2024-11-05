import { createPalette } from './color';
import { sizes } from './size';
import type { TBase } from './base';
import type { TBreakpointBase, TBreakpoints } from './breakpoint';
import type { TColorBase, TColors } from './color';
import type { TShadows } from './shadow';
import type { TSize } from './size';
import type { TTypography } from '../components/typography';
import type { TTextField } from '../components/textfield';

export type TComponents = {
  typography: TTypography;
  textfield: TTextField;
};

export type TThemeBase = {
  base: TBase;
  breakpoints: TBreakpointBase;
  colors: TColorBase;
  shadows: TShadows;
  components: TComponents;
};

export type TTheme = {
  base: TBase;
  breakpoints: TBreakpoints;
  colors: TColors;
  shadows: TShadows;
  sizes: TSize[];
  components: TComponents;
};

export const createTheme = (themeBase: TThemeBase): TTheme => {
  const breakpoints = themeBase.breakpoints.reduce((acc, value, index) => {
    acc[sizes[index]] = value;
    return acc;
  }, {} as TBreakpoints);

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
    breakpoints,
    colors,
    shadows: themeBase.shadows,
    sizes,
    components,
  };

  return theme;
};
