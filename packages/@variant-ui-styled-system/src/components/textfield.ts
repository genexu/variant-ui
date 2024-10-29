import type { TModifier } from './base';

export type TTextFieldVariant =
  | 'default'
  | 'outlined'
  | 'outlined-floating'
  | 'filled'
  | 'filled-floating'
  | 'floating';

export type TTextFieldSx = {
  formControl: TModifier;
  formControl_label: TModifier;
  formControl_input: TModifier;
};

export type TTextFieldProps = {
  variant?: TTextFieldVariant;
  label: string;
  value?: string;
  placeholder?: string;
};

export type TTextField = {
  [key in TTextFieldVariant]: TTextFieldSx;
};
