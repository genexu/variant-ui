import type { CSSObject } from '@emotion/css/create-instance';
import {
  TAppBar,
  TButton,
  TContainer,
  TList,
  TTextField,
  TTypography,
} from '../components';

export type TComponent<
  TVariant extends string,
  TStructureElement extends string,
> = {
  [key in TVariant]?: {
    [key in TStructureElement]?: CSSObject;
  };
};

export type TComponents = {
  appbar: TAppBar;
  button: TButton;
  container: TContainer;
  list: TList;
  textfield: TTextField;
  typography: TTypography;
};
