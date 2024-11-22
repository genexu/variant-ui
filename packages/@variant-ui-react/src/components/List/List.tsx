import { FC, OlHTMLAttributes, ReactNode } from 'react';
import { css } from '@emotion/css';
import { useTheme } from '../../hooks/useTheme';

export type TListComponentProps = OlHTMLAttributes<HTMLOListElement> & {
  children: ReactNode;
};

export type TList = FC<TListComponentProps>;

export const List: TList = ({ children, ...props }: TListComponentProps) => {
  const theme = useTheme();
  if (!theme) return null;

  const sx = theme.components.list.root;
  const className = css(sx);

  return (
    <ul className={className} {...props}>
      {children}
    </ul>
  );
};
