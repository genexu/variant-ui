import type { CSSObject } from '@emotion/css/create-instance';

export type TAppBarSX = CSSObject;

export type AppBarProps = {
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
