import { base } from './base';
import type {
  TTextFieldVariant,
  TTextFieldProps,
} from '@variant-ui/styled-system';

export const textfield: Record<TTextFieldVariant, TTextFieldProps> = {
  default: {
    borderRadius: base.borderRadius,
  },
  outlined: {
    borderRadius: base.borderRadius,
  },
  'outlined-floating': {
    borderRadius: base.borderRadius,
  },
  filled: {
    borderRadius: base.borderRadius,
  },
  'filled-floating': {
    borderRadius: base.borderRadius,
  },
  floating: {
    borderRadius: base.borderRadius,
  },
};
