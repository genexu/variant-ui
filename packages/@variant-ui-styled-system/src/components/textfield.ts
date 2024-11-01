export type TTextFieldVariant =
  | 'default'
  | 'outlined'
  | 'outlined-floating'
  | 'filled'
  | 'filled-floating'
  | 'floating';

export type TTextFieldSx = {
  formControl: string;
  formControl_label: string;
  formControl_input: string;
};

export type TTextFieldProps = {
  variant?: TTextFieldVariant;
  label: string;
  error?: boolean | string;
};

export type TTextField = {
  [key in TTextFieldVariant]: TTextFieldSx;
};
