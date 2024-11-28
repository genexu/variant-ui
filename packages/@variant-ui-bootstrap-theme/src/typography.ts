import type { CSSObject } from '@emotion/css/create-instance';
import type { TTypography } from '@variant-ui/styled-system';

const fontWeightMedium = 500;
const fontWeightRegular = 400;

const defaultTypographySx: CSSObject = {
  fontSize: '0.875rem',
  lineHeight: '1.2',
  fontWeight: fontWeightRegular,
  fontStyle: 'normal',
  marginBottom: '0.5rem',
};

export const typography: TTypography = {
  h1: {
    root: {
      ...defaultTypographySx,
      fontSize: '2.5rem',
      fontWeight: fontWeightMedium,
    },
  },
  h2: {
    root: {
      ...defaultTypographySx,
      fontSize: '2rem',
      fontWeight: fontWeightMedium,
    },
  },
  h3: {
    root: {
      ...defaultTypographySx,
      fontSize: '1.75rem',
      fontWeight: fontWeightMedium,
    },
  },
  h4: {
    root: {
      ...defaultTypographySx,
      fontSize: '1.5rem',
      fontWeight: fontWeightMedium,
    },
  },
  h5: {
    root: {
      ...defaultTypographySx,
      fontSize: '1.25rem',
      fontWeight: fontWeightMedium,
    },
  },
  h6: {
    root: {
      ...defaultTypographySx,
      fontSize: '1rem',
      fontWeight: fontWeightMedium,
    },
  },
  p: { root: defaultTypographySx },
  span: { root: defaultTypographySx },
};
