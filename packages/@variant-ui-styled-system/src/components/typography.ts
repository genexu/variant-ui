import { TFontWeight, TFontStyle } from '../system/font';

export type TTypographyVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'p'
  | 'span';

export type TTypographyProps = {
  fontSize?: number | string;
  lineHeight?: number;
  fontWeight?: TFontWeight;
  fontStyle?: TFontStyle;
};

export type TTypography = {
  [key in TTypographyVariant]: TTypographyProps;
};
