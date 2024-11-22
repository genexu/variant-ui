import {
  TListSX,
  TListItemSX,
  TListItemButtonSX,
  TListSXes,
} from '@variant-ui/styled-system';

const listSX: TListSX = {
  listStyle: 'none',
  margin: 0,
  padding: 0,
  position: 'relative',
  paddingTop: 8,
  paddingBottom: 8,
};

const listItemSX: TListItemSX = {
  paddingLeft: 16,
  paddingRight: 16,
  paddingTop: 8,
  paddingBottom: 8,
};

const listItemButtonSX: TListItemButtonSX = Object.assign({}, listItemSX, {
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.04)',
  },
});

export const list: TListSXes = {
  root: listSX,
  item: listItemSX,
  itemButton: listItemButtonSX,
};
