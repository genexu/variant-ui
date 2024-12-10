import { colors } from '../color';
import { shadows } from '../shadows';
import type { CSSObject } from '@emotion/css/create-instance';
import type { TMenu } from '@variant-ui/styled-system';

const menuSX: CSSObject = {
  listStyle: 'none',
  margin: 0,
  padding: 0,
  position: 'relative',
  paddingTop: 8,
  paddingBottom: 8,
  backgroundColor: colors.white,
  boxShadow: shadows[2],
};

export const menu: TMenu = {
  default: {
    root: menuSX,
  },
};
