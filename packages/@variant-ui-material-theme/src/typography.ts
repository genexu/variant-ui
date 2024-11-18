import { css } from '@emotion/css';
import type {
  TTypographyVariant,
  TTypographySx,
} from '@variant-ui/styled-system';

const fontWeightMedium = 500;
const fontWeightRegular = 400;
const fontWeightLight = 300;

function createTypography(
  fontSize: string,
  lineHeight: string,
  fontWeight: number,
  fontStyle: string,
) {
  return css(`
    font-size: ${fontSize};
    line-height: ${lineHeight};
    font-weight: ${fontWeight};
    font-style: ${fontStyle};
  `);
}

export const typography: Record<TTypographyVariant, TTypographySx> = {
  h1: createTypography('96px', '1.167rem', fontWeightLight, 'normal'),
  h2: createTypography('60px', '1.2rem', fontWeightLight, 'normal'),
  h3: createTypography('48px', '1.167rem', fontWeightRegular, 'normal'),
  h4: createTypography('34px', '1.235rem', fontWeightRegular, 'normal'),
  h5: createTypography('24px', '1.334rem', fontWeightRegular, 'normal'),
  h6: createTypography('20px', '1.6rem', fontWeightMedium, 'normal'),
  p: createTypography('14px', '1.5rem', fontWeightRegular, 'normal'),
  span: createTypography('14px', '1.5rem', fontWeightRegular, 'normal'),
};
