import { CSSObject } from '@emotion/css/create-instance';
import type { TDivider } from '@variant-ui/styled-system';

const sx: CSSObject = {
  margin: '.5rem 0',
  overflow: 'hidden',
  border: 0,
  borderTop: '1px solid rgba(0, 0, 0, .15)',
  boxSizing: 'border-box',
  backgroundColor: 'currentColor',
  opacity: 0.25,
};

export const divider: TDivider = {
  default: {
    root: sx,
  },
};
