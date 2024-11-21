export type TButtonVariant =
  | 'text'
  | 'outlined'
  | 'contained-floating'
  | 'contained';

export type TButtonSx = string;

export type TButton = {
  [key in TButtonVariant]: TButtonSx;
};

export type TButtonProps = {
  variant?: TButtonVariant;
};
