import { forwardRef } from 'react';
import { css } from '@emotion/css';
import { useTheme } from '../../hooks/useTheme';
import type { FC, HTMLProps, OlHTMLAttributes } from 'react';

export type TListComponentProps = OlHTMLAttributes<HTMLUListElement> &
  HTMLProps<HTMLUListElement>;
export type TList = FC<TListComponentProps>;

const List: TList = forwardRef<HTMLUListElement, TListComponentProps>(
  ({ children, ...props }, ref) => {
    const theme = useTheme();
    if (!theme) return null;

    const sx = theme.components.list?.default?.root;

    return (
      <ul ref={ref} className={css(sx)} {...props}>
        {children}
      </ul>
    );
  },
);

List.displayName = 'List';

export { List };
