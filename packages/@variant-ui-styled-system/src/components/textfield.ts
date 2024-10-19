export type TTextFieldVariant =
  | 'default'
  | 'outlined'
  | 'outlined-floating'
  | 'filled'
  | 'filled-floating'
  | 'floating';

export type TTextFieldProps = {
  borderRadius: string | number;
};

export type TTextField = {
  [key in TTextFieldVariant]: TTextFieldProps;
};
