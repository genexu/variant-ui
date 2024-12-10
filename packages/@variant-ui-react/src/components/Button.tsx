import { forwardRef } from 'react';
import { useTheme } from '../hooks/useTheme';
import { Paper } from './Paper';
import { css } from '@emotion/css';
import type { FC, HTMLProps } from 'react';
import type { TButtonProps } from '@variant-ui/styled-system';

type TButtonComponentProps = HTMLProps<HTMLButtonElement> & TButtonProps;

type TButton = FC<TButtonComponentProps>;

const Button: TButton = forwardRef<HTMLButtonElement, TButtonComponentProps>(
  (
    { variant = 'contained', children, ...props }: TButtonComponentProps,
    ref,
  ) => {
    const theme = useTheme();
    if (!theme) return null;

    const elevation = variant === 'contained-floating' ? 2 : 0;
    const sx = theme.components.button[variant]?.root;

    return (
      <Paper
        as="button"
        ref={ref}
        className={css(sx)}
        elevation={elevation}
        {...props}
      >
        {children}
      </Paper>
    );
  },
);

Button.displayName = 'Button';

export { Button };
