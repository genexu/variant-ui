import { FC, LiHTMLAttributes, ReactNode } from 'react';
import { css } from '@emotion/css';
import { useTheme } from '../../hooks/useTheme';

export type TListItemComponentProps = LiHTMLAttributes<HTMLLIElement> & {
  children: ReactNode;
};

export type TListItem = FC<TListItemComponentProps>;

export const ListItem: TListItem = ({
  children,
  ...props
}: TListItemComponentProps) => {
  const theme = useTheme();
  if (!theme) return null;

  const sx = theme.components.list?.default?.item;

  return (
    <li className={css(sx)} {...props}>
      {children}
    </li>
  );
};
