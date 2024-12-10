import { colors, palette } from '../color';
import type { CSSObject } from '@emotion/css/create-instance';
import type { TMenu } from '@variant-ui/styled-system';

const menuSX: CSSObject = {
  listStyle: 'none',
  margin: 0,
  padding: 0,
  position: 'relative',
  border: `1px solid ${palette.gray[700]}`,
  borderRadius: '4px',
  backgroundColor: colors.white,
};

export const menu: TMenu = {
  default: {
    root: menuSX,
  },
};
