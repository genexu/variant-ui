import { TComponent } from '../system/component';
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

export type TTypographyStructureElement = 'root';

export type TTypography = TComponent<
  TTypographyVariant,
  TTypographyStructureElement
>;

export type TTypographyProps = {
  variant?: TTypographyVariant;
  color?: string;
  fontSize?: number | string;
  lineHeight?: number;
  fontWeight?: TFontWeight;
  fontStyle?: TFontStyle;
  gutterBottom?: boolean;
};

export function createTypography(
  fontSize: string,
  lineHeight: string,
  fontWeight: TFontWeight,
  fontStyle: TFontStyle,
  marginButtom: string = '0px',
) {
  return `
    font-size: ${fontSize};
    line-height: ${lineHeight};
    font-weight: ${fontWeight};
    font-style: ${fontStyle};
    margin-bottom: ${marginButtom};
  `;
}
