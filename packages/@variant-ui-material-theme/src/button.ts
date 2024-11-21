import { css } from '@emotion/css';
import { colors, palette } from './color';
import { shadows } from './shadows';
import type { CSSObject } from '@emotion/css/create-instance';
import type { TButtonVariant, TButtonSx } from '@variant-ui/styled-system';

const defaultButtonSx: CSSObject = {
  cursor: 'pointer',
  border: 'none',
  borderRadius: 4,
  display: 'inline-flex',
  minWidth: 64,
  alignItems: 'center',
  justifyContent: 'center',
  lineHeight: 1.75,
  letterSpacing: '0.02857em',
  padding: '6px 16px',
  textTransform: 'uppercase',
  transition:
    'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1), border-color 250ms cubic-bezier(0.4, 0, 0.2, 1), color 250ms cubic-bezier(0.4, 0, 0.2, 1)',
};

const textButtonSx = Object.assign({}, defaultButtonSx, {
  color: colors.primary,
  backgroundColor: 'transparent',
  '&:hover': {
    backgroundColor: palette.blue[100],
  },
});

const containedButtonSx = Object.assign({}, defaultButtonSx, {
  color: colors.white,
  backgroundColor: colors.primary,
  '&:hover': {
    backgroundColor: palette.blue[600],
  },
});

const containerdFloatingButtonSx = Object.assign({}, containedButtonSx, {
  '&:hover': {
    backgroundColor: palette.blue[600],
    boxShadow: shadows[4],
  },
});

const outlinedButtonSx = Object.assign({}, defaultButtonSx, {
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
