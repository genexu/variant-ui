import { darken, lighten } from 'polished';

export type TColor =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'error'
  | 'warning'
  | 'info'
  | 'white'
  | 'black';

export type TPaletteColor =
  | 'red'
  | 'purple'
  | 'blue'
  | 'green'
  | 'yellow'
  | 'orange'
  | 'gray';

export type TPaletteScale = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

export type TPaletteBase = {
  [key in TPaletteColor]: string;
};

export type TColorBase = {
  [key in TColor]: string;
} & {
  palette: TPaletteBase;
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

export const createPalette = (base: TPaletteBase): TPalette => {
  return paletteColors.reduce<TPalette>((acc, color) => {
    acc[color] = {
      100: lighten(0.4, base[color]),
      200: lighten(0.3, base[color]),
      300: lighten(0.2, base[color]),
      400: lighten(0.1, base[color]),
      500: base[color],
      600: darken(0.1, base[color]),
      700: darken(0.2, base[color]),
      800: darken(0.3, base[color]),
      900: darken(0.4, base[color]),
    };
    return acc;
  }, {} as TPalette);
};
