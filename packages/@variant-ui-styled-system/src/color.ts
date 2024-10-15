import { darken, lighten } from 'polished';

export type TColor =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'error'
  | 'warning'
  | 'info';

export type TPaletteColor =
  | 'red'
  | 'purple'
  | 'blue'
  | 'green'
  | 'yellow'
  | 'orange'
  | 'gray';

export type TPaletteScale = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

export type TBasicPalette = {
  [key in TPaletteColor]: string;
};

export type TBasicColors = {
  [key in TColor]: string;
} & {
  palette: TBasicPalette;
};

export type TPaletteScaleColors = {
  [key in TPaletteScale]: string;
};

export type TPalette = {
  [key in TPaletteColor]: TPaletteScaleColors;
};

export type TColors = {
  [key in TColor]: string;
} & {
  palette: TPalette;
};

const paletteColors: Array<TPaletteColor> = [
  'red',
  'purple',
  'blue',
  'green',
  'yellow',
  'orange',
  'gray',
] as const;

export const transformBasicPaletteToPalette = (
  basicPalette: TBasicPalette,
): TPalette => {
  return paletteColors.reduce<TPalette>((acc, color) => {
    acc[color] = {
      100: lighten(0.4, basicPalette[color]),
      200: lighten(0.3, basicPalette[color]),
      300: lighten(0.2, basicPalette[color]),
      400: lighten(0.1, basicPalette[color]),
      500: basicPalette[color],
      600: darken(0.1, basicPalette[color]),
      700: darken(0.2, basicPalette[color]),
      800: darken(0.3, basicPalette[color]),
      900: darken(0.4, basicPalette[color]),
    };
    return acc;
  }, {} as TPalette);
};
