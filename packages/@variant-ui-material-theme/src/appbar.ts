import { TAppBar } from '@variant-ui/styled-system';
import { zIndex } from './zindex';
import { CSSObject } from '@emotion/css/create-instance';

const sx: CSSObject = {
  zIndex: zIndex.appbar,
};

export const appbar: TAppBar = {
  default: {
    root: sx,
  },
};
