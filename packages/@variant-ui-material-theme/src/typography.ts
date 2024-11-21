import { css } from '@emotion/css';
import { createTypography } from '@variant-ui/styled-system';
import type {
  TTypographyVariant,
  TTypographySx,
} from '@variant-ui/styled-system';

const fontWeightMedium = 500;
const fontWeightRegular = 400;
const fontWeightLight = 300;

export const typography: Record<TTypographyVariant, TTypographySx> = {
  h1: css(
    createTypography('6rem', '1.167', fontWeightLight, 'normal', '0.35em'),
  ),
  h2: css(
    createTypography('3.75rem', '1.2', fontWeightLight, 'normal', '0.35em'),
  ),
  h3: css(
    createTypography('3rem', '1.167', fontWeightRegular, 'normal', '0.35em'),
  ),
  h4: css(
    createTypography(
      '2.125rem',
      '1.235',
      fontWeightRegular,
      'normal',
      '0.35em',
    ),
  ),
  h5: css(
    createTypography('1.5rem', '1.334', fontWeightRegular, 'normal', '0.35em'),
  ),
  h6: css(
    createTypography('1.25rem', '1.6', fontWeightMedium, 'normal', '0.35em'),
  ),
  p: css(
    createTypography('1rem', '1.5', fontWeightRegular, 'normal', '0.35em'),
  ),
  span: css(
    createTypography('1rem', '1.5', fontWeightRegular, 'normal', '0.35em'),
  ),
};
