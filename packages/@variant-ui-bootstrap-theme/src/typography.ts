import { css } from '@emotion/css';
import type {
  TTypographyVariant,
  TTypographySx,
} from '@variant-ui/styled-system';

const fontWeightMedium = 500;
const fontWeightRegular = 400;

const baseFontSize = 1; // rem
const baseLineHeight = 1.2;

export const typography: Record<TTypographyVariant, TTypographySx> = {
  h1: css(`
    fontSize: ${baseFontSize * 2.5}rem;
    lineHeight: ${baseLineHeight}rem;
    fontWeight: ${fontWeightMedium};
    fontStyle: 'normal';
  `),
  h2: css(`
    fontSize: ${baseFontSize * 2}rem;
    lineHeight: ${baseLineHeight}rem;
    fontWeight: ${fontWeightMedium};
    fontStyle: 'normal';
  `),
  h3: css(`
    fontSize: ${baseFontSize * 1.75}rem;
    lineHeight: ${baseLineHeight}rem;
    fontWeight: ${fontWeightMedium};
    fontStyle: 'normal';
  `),
  h4: css(`
    fontSize: ${baseFontSize * 1.5}rem;
    lineHeight: ${baseLineHeight}rem;
    fontWeight: ${fontWeightMedium};
    fontStyle: 'normal';
  `),
  h5: css(`
    fontSize: ${baseFontSize * 1.25}rem;
    lineHeight: ${baseLineHeight}rem;
    fontWeight: ${fontWeightMedium};
    fontStyle: 'normal';
  `),
  h6: css(`
    fontSize: ${baseFontSize}rem;
    lineHeight: ${baseLineHeight}rem;
    fontWeight: ${fontWeightMedium};
    fontStyle: 'normal';
  `),
  p: css(`
    fontSize: '0.875rem';
    lineHeight: ${baseLineHeight}rem;
    fontWeight: ${fontWeightRegular};
    fontStyle: 'normal';
  `),
  span: css(`
    fontSize: '0.875rem';
    lineHeight: ${baseLineHeight}rem;
    fontWeight: ${fontWeightRegular};
    fontStyle: 'normal';
  `),
};
