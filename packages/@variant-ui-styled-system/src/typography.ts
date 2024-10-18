export type TFontWeight = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

export type TFontStyle =
  | 'normal'
  | 'italic'
  | 'oblique'
  | 'inherit'
  | 'initial'
  | 'unset';

export type TTypographyVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'p'
  | 'span';

export type TTypographtStyle = {
  fontSize: number | string;
  lineHeight: number | string;
  fontWeight: TFontWeight;
  fontStyle: TFontStyle;
};

export type TTypography = {
  [key in TTypographyVariant]: TTypographtStyle;
};
