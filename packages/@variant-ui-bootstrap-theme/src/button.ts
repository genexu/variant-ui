import { css } from '@emotion/css';
import { colors, palette } from './color';
import type { CSSObject } from '@emotion/css/create-instance';
import type { TButtonVariant, TButtonSx } from '@variant-ui/styled-system';

const defaultButtonSx: CSSObject = {
  display: 'inline-block',
  cursor: 'pointer',
  padding: '0.375rem 0.75rem',
  lineHeight: 1.5,
  border: `1px solid ${colors.primary}`,
  borderRadius: '0.375rem',
  transition:
    'color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out',
};

let textButtonSx: CSSObject = structuredClone(defaultButtonSx);
textButtonSx = Object.assign(textButtonSx, {
  color: colors.primary,
  backgroundColor: 'transparent',
  '&:hover': {
    backgroundColor: palette.blue[100],
  },
});

let containedButtonSx: CSSObject = structuredClone(defaultButtonSx);
containedButtonSx = Object.assign(containedButtonSx, {
  color: colors.white,
  backgroundColor: colors.primary,
  '&:hover': {
    backgroundColor: palette.blue[600],
  },
});

let containerdFloatingButtonSx: CSSObject = structuredClone(containedButtonSx);
containerdFloatingButtonSx = Object.assign(containerdFloatingButtonSx, {
  '&:hover': {
    backgroundColor: palette.blue[600],
  },
});

let outlinedButtonSx: CSSObject = structuredClone(defaultButtonSx);
outlinedButtonSx = Object.assign(outlinedButtonSx, {
  color: colors.primary,
  backgroundColor: 'transparent',
  border: `1px solid ${colors.primary}`,
  '&:hover': {
    backgroundColor: palette.blue[100],
  },
});

export const button: Record<TButtonVariant, TButtonSx> = {
  text: css(textButtonSx),
  contained: css(containedButtonSx),
  'contained-floating': css(containerdFloatingButtonSx),
  outlined: css(outlinedButtonSx),
};
