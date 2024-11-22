import type { CSSObject } from '@emotion/css/create-instance';

export type TListSX = CSSObject;
export type TListItemSX = CSSObject;
export type TListItemButtonSX = CSSObject;

export type TListSXes = {
  root: TListSX;
  item: TListItemSX;
  itemButton: TListItemButtonSX;
};
