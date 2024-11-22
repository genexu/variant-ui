import { colors } from './color';
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
};

const listItemSX: TListItemSX = {
  padding: '0.5rem 1rem',
  color: '#212529',
};

const listItemButtonSX: TListItemButtonSX = Object.assign({}, listItemSX, {
  cursor: 'pointer',
  '&:hover': {
    color: colors.black,
    backgroundColor: '#f8f9fa',
  },
});

export const list: TListSXes = {
  root: listSX,
  item: listItemSX,
  itemButton: listItemButtonSX,
};
