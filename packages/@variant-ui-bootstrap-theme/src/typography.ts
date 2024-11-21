import { css } from '@emotion/css';
import { createTypography } from '@variant-ui/styled-system';
import type {
  TTypographyVariant,
  TTypographySx,
} from '@variant-ui/styled-system';

const fontWeightMedium = 500;
const fontWeightRegular = 400;

export const typography: Record<TTypographyVariant, TTypographySx> = {
  h1: css(
    createTypography('2.5rem', '1.2', fontWeightMedium, 'normal', '0.5rem'),
  ),
  h2: css(
    createTypography('2rem', '1.2', fontWeightMedium, 'normal', '0.5rem'),
  ),
  h3: css(
    createTypography('1.75rem', '1.2', fontWeightMedium, 'normal', '0.5rem'),
  ),
  h4: css(
    createTypography('1.5rem', '1.2', fontWeightMedium, 'normal', '0.5rem'),
  ),
  h5: css(
    createTypography('1.25rem', '1.2', fontWeightMedium, 'normal', '0.5rem'),
  ),
  h6: css(
    createTypography('1rem', '1.2', fontWeightMedium, 'normal', '0.5rem'),
  ),
  p: css(
    createTypography('0.875rem', '1.2', fontWeightRegular, 'normal', '0.5rem'),
  ),
  span: css(
    createTypography('0.875rem', '1.2', fontWeightRegular, 'normal', '0.5rem'),
  ),
};
