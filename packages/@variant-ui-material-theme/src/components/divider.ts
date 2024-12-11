import { CSSObject } from '@emotion/css/create-instance';
import type { TDivider } from '@variant-ui/styled-system';

const sx: CSSObject = {
  margin: 0,
  borderWidth: '0px 0px thin',
  borderStyle: 'solid',
  borderColor: 'rgba(0, 0, 0, 0.12)',
};

export const divider: TDivider = {
  default: {
    root: sx,
  },
};
