import { css } from '@emotion/css';
import { colors, palette } from './color';
import type {
  TTextFieldVariant,
  TTextFieldSx,
} from '@variant-ui/styled-system';

const defaultFormControlSx = {
  position: 'relative',
  paddingTop: '20px',
  marginBottom: '8px',
  '&:before': {
    left: 0,
    right: 0,
    bottom: 0,
    content: '""',
    position: 'absolute',
    borderBottom: '1px solid',
    borderBottomColor: colors.black,
    transition: 'border-bottom-color 200ms cubic-bezier(0.4, 0, 0.2, 1)',
  },
  '&:has(:focus-within, input:hover):not(:has(input:disabled))': {
    '&:before': {
      borderBottomWidth: '2px',
    },
  },
  '&:has(:focus-within)': {
    '&:before': {
      borderBottomColor: colors.primary,
    },
    label: {
      color: colors.primary,
    },
  },
  '&:has(:focus-within, input:not(:placeholder-shown))': {
    label: {
      transformOrigin: 'top left',
      transform: 'translate(0px, 0px) scale(0.75)',
    },
  },
  '&:has(input:disabled)': {
    '&:before': {
      borderBottom: '1px solid',
      borderBottomColor: palette.gray[300],
      borderBottomStyle: 'dashed',
    },
    label: {
      color: palette.gray[300],
    },
    input: {
      color: palette.gray[300],
      backgroundColor: 'transparent',
    },
  },
  '&.error': {
    '&:before': {
      borderBottomColor: colors.error,
    },
    label: {
      color: colors.error,
    },
  },
} as const;

const defaultFormControlLabelSx = {
  position: 'absolute',
  top: 0,
  left: 0,
  transformOrigin: 'top left',
  transform: 'translate(0px, 20px) scale(1)',
  transition:
    'color 200ms cubic-bezier(0, 0, 0.2, 1), transform 200ms cubic-bezier(0, 0, 0.2, 1)',
} as const;

const defaultFormControlInputSx = {
  display: 'flex',
  width: '100%',
  padding: '4px 0px 5px',
  border: 0,
  '&:focus-visible': {
    outline: 'none',
  },
  '&::placeholder': {
    color: 'transparent',
  },
} as const;

const defaultTextFieldSx: TTextFieldSx = {
  formControl: css(defaultFormControlSx),
  formControl_label: css(defaultFormControlLabelSx),
  formControl_input: css(defaultFormControlInputSx),
};

export const textfield: Record<TTextFieldVariant, TTextFieldSx> = {
  default: defaultTextFieldSx,
  outlined: defaultTextFieldSx,
  'outlined-floating': defaultTextFieldSx,
  filled: defaultTextFieldSx,
  'filled-floating': defaultTextFieldSx,
  floating: defaultTextFieldSx,
};
