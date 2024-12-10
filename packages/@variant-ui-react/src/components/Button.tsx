import { FC, HTMLAttributes } from 'react';
import { useTheme } from '../hooks/useTheme';
import { Paper } from './Paper';
import type { TButtonProps } from '@variant-ui/styled-system';
import { css } from '@emotion/css';

type TButtonComponentProps = HTMLAttributes<HTMLButtonElement> & TButtonProps;

type TButton = FC<TButtonComponentProps>;

export const Button: TButton = ({
  variant = 'contained',
  children,
}: TButtonComponentProps) => {
  const theme = useTheme();
  if (!theme) return null;

  const elevation = variant === 'contained-floating' ? 2 : 0;
  const sx = theme.components.button[variant]?.root;

  return (
    <Paper as="button" className={css(sx)} elevation={elevation}>
      {children}
    </Paper>
  );
};
