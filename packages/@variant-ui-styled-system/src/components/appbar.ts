import type { TComponent } from '../system/component';

export type TAppBarVariant = 'default';

export type TAppBarStructureElement = 'root';

export type TAppBar = TComponent<TAppBarVariant, TAppBarStructureElement>;

export type TAppBarProps = {
  width?: number | string;
  position?: 'fixed' | 'absolute' | 'sticky' | 'static' | 'relative';
  color?: string;
  bgColor?: string;
  elevation?: number;
  top?: number | string;
  left?: number | string;
  right?: number | string;
  bottom?: number | string;
};
