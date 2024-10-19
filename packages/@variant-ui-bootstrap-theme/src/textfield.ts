import { base } from './base';
import type {
  TTextFieldVariant,
  TTextFieldProps,
} from '@variant-ui/styled-system';

const defaultTextFieldProps: TTextFieldProps = {
  borderRadius: base.borderRadius,
};

export const textfield: Record<TTextFieldVariant, TTextFieldProps> = {
  default: defaultTextFieldProps,
  outlined: defaultTextFieldProps,
  'outlined-floating': defaultTextFieldProps,
  filled: defaultTextFieldProps,
  'filled-floating': defaultTextFieldProps,
  floating: defaultTextFieldProps,
};
