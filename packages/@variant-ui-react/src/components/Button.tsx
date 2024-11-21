import { FC, HTMLAttributes } from 'react';
import { useTheme } from '../hooks/useTheme';
import { Paper } from './Paper';
import type { TButtonProps } from '@variant-ui/styled-system';

type TButtonComponentProps = HTMLAttributes<HTMLButtonElement> & TButtonProps;

type TButton = FC<TButtonComponentProps>;

export const Button: TButton = ({
  variant = 'contained',
  children,
}: TButtonComponentProps) => {
  const theme = useTheme();
  if (!theme) return null;

  const elevation = variant === 'contained-floating' ? 2 : 0;

  return (
    <Paper
      as="button"
      className={theme.components.button[variant]}
      elevation={elevation}
    >
      {children}
    </Paper>
  );
};
