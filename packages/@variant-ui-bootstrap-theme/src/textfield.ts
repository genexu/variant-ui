import { css } from '@emotion/css';
import { base, colors, palette } from './base';
import type {
  TTextFieldVariant,
  TTextFieldSx,
} from '@variant-ui/styled-system';

const defaultFormControlSx = {
  marginBottom: '8px',
  '&.error': {
    input: {
      borderColor: colors.error,
      boxShadow: 'none',
    },
  },
};
const defaultFormControlInputSx = {
  width: '100%',
  padding: '0.375rem 0.75rem',
  border: `1px solid ${palette.gray[700]}`,
  borderRadius: `${base.borderRadius}px`,
  transition: 'border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
  '&:focus-visible': {
    outline: 'none',
  },
  '&:focus-within': {
    borderColor: palette.blue[500],
    boxShadow: `0 0 0 0.2rem ${palette.blue[100]}`,
  },
  '&:disabled': {
    backgroundColor: palette.gray[200],
    borderColor: palette.gray[300],
    color: palette.gray[500],
  },
};
const defaultFormControlLabelSx = {
  display: 'inline-block',
  marginBottom: '0.5rem',
};

const defaultTextFieldSx: TTextFieldSx = {
  formControl: css(defaultFormControlSx),
  formControl_input: css(defaultFormControlInputSx),
  formControl_label: css(defaultFormControlLabelSx),
};

export const textfield: Record<TTextFieldVariant, TTextFieldSx> = {
  default: defaultTextFieldSx,
  outlined: defaultTextFieldSx,
  'outlined-floating': defaultTextFieldSx,
  filled: defaultTextFieldSx,
  'filled-floating': defaultTextFieldSx,
  floating: defaultTextFieldSx,
};
