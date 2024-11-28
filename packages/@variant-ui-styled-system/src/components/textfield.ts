import { TComponent } from '../system/component';

export type TTextFieldVariant =
  | 'default'
  | 'outlined'
  | 'outlined-floating'
  | 'filled'
  | 'filled-floating'
  | 'floating';

export type TTextFieldStructureElement =
  | 'root'
  | 'formControl_label'
  | 'formControl_input';

export type TTextField = TComponent<
  TTextFieldVariant,
  TTextFieldStructureElement
>;

export type TTextFieldProps = {
  variant?: TTextFieldVariant;
  label: string;
  error?: boolean | string;
};
