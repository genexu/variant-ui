import { FC, LiHTMLAttributes, ReactNode } from 'react';
import { css } from '@emotion/css';
import { useTheme } from '../../hooks/useTheme';

export type TListItemButtonComponentProps = LiHTMLAttributes<HTMLLIElement> & {
  children: ReactNode;
};

export type TListItemButton = FC<TListItemButtonComponentProps>;

export const ListItemButton: TListItemButton = ({
  children,
  ...props
}: TListItemButtonComponentProps) => {
  const theme = useTheme();
  if (!theme) return null;

  const sx = theme.components.list.itemButton;
  const className = css(sx);

  return (
    <li className={className} {...props}>
      {children}
    </li>
  );
};
