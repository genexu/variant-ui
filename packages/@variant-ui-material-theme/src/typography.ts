import type {
  TTypographyVariant,
  TTypographyProps,
} from '@variant-ui/styled-system';

const fontWeightMedium = 500;
const fontWeightRegular = 400;
const fontWeightLight = 300;

export const typography: Record<TTypographyVariant, TTypographyProps> = {
  h1: {
    fontSize: 96,
    lineHeight: 1.167,
    fontWeight: fontWeightLight,
    fontStyle: 'normal',
  },
  h2: {
    fontSize: 60,
    lineHeight: 1.2,
    fontWeight: fontWeightLight,
    fontStyle: 'normal',
  },
  h3: {
    fontSize: 48,
    lineHeight: 1.167,
    fontWeight: fontWeightRegular,
    fontStyle: 'normal',
  },
  h4: {
    fontSize: 34,
    lineHeight: 1.235,
    fontWeight: fontWeightRegular,
    fontStyle: 'normal',
  },
  h5: {
    fontSize: 24,
    lineHeight: 1.334,
    fontWeight: fontWeightRegular,
    fontStyle: 'normal',
  },
  h6: {
    fontSize: 20,
    lineHeight: 1.6,
    fontWeight: fontWeightMedium,
    fontStyle: 'normal',
  },
  p: {
    fontSize: 14,
    lineHeight: 1.5,
    fontWeight: fontWeightRegular,
    fontStyle: 'normal',
  },
  span: {
    fontSize: 14,
    lineHeight: 1.5,
    fontWeight: fontWeightRegular,
    fontStyle: 'normal',
  },
};
