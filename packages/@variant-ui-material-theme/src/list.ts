import { CSSObject } from '@emotion/css/create-instance';
import { TList } from '@variant-ui/styled-system';

const listSX: CSSObject = {
  listStyle: 'none',
  margin: 0,
  padding: 0,
  position: 'relative',
  paddingTop: 8,
  paddingBottom: 8,
};

const listItemSX: CSSObject = {
  paddingLeft: 16,
  paddingRight: 16,
  paddingTop: 8,
  paddingBottom: 8,
};

let listItemButtonSX: CSSObject = structuredClone(listItemSX);
listItemButtonSX = Object.assign(listItemButtonSX, {
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.04)',
  },
});

export const list: TList = {
  default: {
    root: listSX,
    item: listItemSX,
    itemButton: listItemButtonSX,
  },
};
