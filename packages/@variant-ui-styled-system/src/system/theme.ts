import { createPalette } from './color';
import { createMediaQuery } from './mq';
import { sizes } from './size';
import type { TBreakpointBase, TBreakpoints } from './breakpoint';
import type { TMediaQuery } from './mq';
import type { TColorBase, TColors } from './color';
import type { TShadows } from './shadow';
import type { TComponents } from './component';

export type TThemeBase = {
  breakpoints: TBreakpointBase;
  colors: TColorBase;
  shadows: TShadows;
  components: TComponents;
};

export type TTheme = {
  breakpoints: TBreakpoints;
  mq: TMediaQuery;
  colors: TColors;
  shadows: TShadows;
  components: TComponents;
};

export const createTheme = (themeBase: TThemeBase): TTheme => {
  const breakpoints = themeBase.breakpoints.reduce((acc, value, index) => {
    acc[sizes[index]] = value;
    return acc;
  }, {} as TBreakpoints);

  const palette = createPalette(themeBase.colors.palette);
  const mq = createMediaQuery(themeBase.breakpoints);

  const colors: TColors = {
    ...themeBase.colors,
    palette,
  };

  const components = {
    appbar: themeBase.components.appbar,
    button: themeBase.components.button,
    container: themeBase.components.container,
    divider: themeBase.components.divider,
    list: themeBase.components.list,
    menu: themeBase.components.menu,
    typography: themeBase.components.typography,
    textfield: themeBase.components.textfield,
  };

  const theme: TTheme = {
    breakpoints,
    mq,
    colors,
    shadows: themeBase.shadows,
    components,
  };

  return theme;
};
