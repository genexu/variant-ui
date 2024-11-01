import { base, palette } from './base';
import type {
  TTextFieldVariant,
  TTextFieldSx,
} from '@variant-ui/styled-system';

const defaultTextFieldSx: TTextFieldSx = {
  formControl: {
    defaultSx: ``,
  },
  formControl_input: {
    defaultSx: `
      width: 100%;
      padding: .375rem .75rem;
      border: 1px solid ${palette.gray[700]};
      border-radius: ${base.borderRadius}px;
      transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
    `,
    focusSx: `
      border-color: ${palette.blue[500]};
      box-shadow: 0 0 0 0.2rem ${palette.blue[100]};
    `,
  },
  formControl_label: {
    defaultSx: `
      display: inline-block;
      margin-bottom: 0.5rem;
    `,
  },
};

export const textfield: Record<TTextFieldVariant, TTextFieldSx> = {
  default: defaultTextFieldSx,
  outlined: defaultTextFieldSx,
  'outlined-floating': defaultTextFieldSx,
  filled: defaultTextFieldSx,
  'filled-floating': defaultTextFieldSx,
  floating: defaultTextFieldSx,
};
