import { colors } from '../color';
import type { CSSObject } from '@emotion/css/create-instance';
import type { TList } from '@variant-ui/styled-system';

const listSX: CSSObject = {
  listStyle: 'none',
  margin: 0,
  padding: 0,
  position: 'relative',
};

const listItemSX: CSSObject = {
  padding: '0.5rem 1rem',
  color: '#212529',
};

let listItemButtonSX: CSSObject = structuredClone(listItemSX);
listItemButtonSX = Object.assign(listItemButtonSX, {
  cursor: 'pointer',
  '&:hover': {
    color: colors.black,
    backgroundColor: '#f8f9fa',
  },
});

export const list: TList = {
  default: {
    root: listSX,
    item: listItemSX,
    itemButton: listItemButtonSX,
  },
};
