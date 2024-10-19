import type {
  TTypographyVariant,
  TTypographyProps,
} from '@variant-ui/styled-system';

const fontWeightMedium = 500;
const fontWeightRegular = 400;

const baseFontSize = 1; // rem
const baseLineHeight = 1.2;

export const typography: Record<TTypographyVariant, TTypographyProps> = {
  h1: {
    fontSize: `${baseFontSize * 2.5}rem`,
    lineHeight: baseLineHeight,
    fontWeight: fontWeightMedium,
    fontStyle: 'normal',
  },
  h2: {
    fontSize: `${baseFontSize * 2}rem`,
    lineHeight: baseLineHeight,
    fontWeight: fontWeightMedium,
    fontStyle: 'normal',
  },
  h3: {
    fontSize: `${baseFontSize * 1.75}rem`,
    lineHeight: baseLineHeight,
    fontWeight: fontWeightMedium,
    fontStyle: 'normal',
  },
  h4: {
    fontSize: `${baseFontSize * 1.5}rem`,
    lineHeight: baseLineHeight,
    fontWeight: fontWeightMedium,
    fontStyle: 'normal',
  },
  h5: {
    fontSize: `${baseFontSize * 1.25}rem`,
    lineHeight: baseLineHeight,
    fontWeight: fontWeightMedium,
    fontStyle: 'normal',
  },
  h6: {
    fontSize: `${baseFontSize}rem`,
    lineHeight: baseLineHeight,
    fontWeight: fontWeightMedium,
    fontStyle: 'normal',
  },
  p: {
    fontSize: '0.875rem',
    lineHeight: baseLineHeight,
    fontWeight: fontWeightRegular,
    fontStyle: 'normal',
  },
  span: {
    fontSize: '0.875rem',
    lineHeight: baseLineHeight,
    fontWeight: fontWeightRegular,
    fontStyle: 'normal',
  },
};
