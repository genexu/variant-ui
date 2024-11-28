import { colors, palette } from './color';
import { shadows } from './shadows';
import type { CSSObject } from '@emotion/css/create-instance';
import type { TButton } from '@variant-ui/styled-system';

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
    boxShadow: shadows[4],
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

export const button: TButton = {
  text: {
    root: textButtonSx,
  },
  contained: {
    root: containedButtonSx,
  },
  'contained-floating': {
    root: containerdFloatingButtonSx,
  },
  outlined: {
    root: outlinedButtonSx,
  },
};
