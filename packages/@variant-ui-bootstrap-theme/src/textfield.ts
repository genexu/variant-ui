import { colors, palette } from './color';
import type {
  TTextField,
  TTextFieldStructureElement,
} from '@variant-ui/styled-system';
import type { CSSObject } from '@emotion/css/create-instance';

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
  'box-sizing': 'border-box',
  padding: '0.375rem 0.75rem',
  border: `1px solid ${palette.gray[700]}`,
  borderRadius: '4px',
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

const defaultTextFieldSx: Record<TTextFieldStructureElement, CSSObject> = {
  root: defaultFormControlSx,
  formControl_label: defaultFormControlLabelSx,
  formControl_input: defaultFormControlInputSx,
};

export const textfield: TTextField = {
  default: defaultTextFieldSx,
  outlined: defaultTextFieldSx,
  'outlined-floating': defaultTextFieldSx,
  filled: defaultTextFieldSx,
  'filled-floating': defaultTextFieldSx,
  floating: defaultTextFieldSx,
};
