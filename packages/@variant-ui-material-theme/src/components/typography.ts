import type { CSSObject } from '@emotion/css/create-instance';
import type { TTypography } from '@variant-ui/styled-system';

const fontWeightMedium = 500;
const fontWeightRegular = 400;
const fontWeightLight = 300;

const defaultTypographySx: CSSObject = {
  fontSize: '1rem',
  lineHeight: '1.5',
  fontWeight: fontWeightRegular,
  fontStyle: 'normal',
  marginBottom: '0.35em',
};

export const typography: TTypography = {
  h1: {
    root: {
      ...defaultTypographySx,
      fontSize: '6rem',
      lineHeight: '1.167',
      fontWeight: fontWeightLight,
    },
  },
  h2: {
    root: {
      ...defaultTypographySx,
      fontSize: '3.75rem',
      lineHeight: '1.2',
      fontWeight: fontWeightLight,
    },
  },
  h3: {
    root: {
      ...defaultTypographySx,
      fontSize: '3rem',
      lineHeight: '1.167',
    },
  },
  h4: {
    root: {
      ...defaultTypographySx,
      fontSize: '2.125rem',
      lineHeight: '1.235',
    },
  },
  h5: {
    root: {
      ...defaultTypographySx,
      fontSize: '1.5rem',
      lineHeight: '1.334',
    },
  },
  h6: {
    root: {
      ...defaultTypographySx,
      fontSize: '1.25rem',
      lineHeight: '1.6',
      fontWeight: fontWeightMedium,
    },
  },
  p: { root: defaultTypographySx },
  span: { root: defaultTypographySx },
};
