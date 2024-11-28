import type { TComponent } from '../system/component';

export type TButtonVariant =
  | 'text'
  | 'outlined'
  | 'contained-floating'
  | 'contained';

export type TButtonStructureElement = 'root';

export type TButton = TComponent<TButtonVariant, TButtonStructureElement>;

export type TButtonProps = {
  variant?: TButtonVariant;
};
