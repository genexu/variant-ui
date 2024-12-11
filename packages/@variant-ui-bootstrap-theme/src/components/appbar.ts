import type { TAppBar } from '@variant-ui/styled-system';
import { zIndex } from '../zindex';
import { CSSObject } from '@emotion/css/create-instance';

const sx: CSSObject = {
  '&.fixed': {
    zIndex: zIndex.fixed,
  },
};

export const appbar: TAppBar = {
  default: {
    root: sx,
  },
};
