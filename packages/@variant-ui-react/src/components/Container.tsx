import { FC, HTMLAttributes } from 'react';
import { useTheme } from '../hooks/useTheme';
import type { TContainerProps } from '@variant-ui/styled-system';
import { css } from '@emotion/css';

export type TContainerComponentProps = HTMLAttributes<HTMLDivElement> &
  TContainerProps;

export type TContainer = FC<TContainerComponentProps>;

export const Container: TContainer = ({
  children,
  variant = 'fluid',
}: TContainerComponentProps) => {
  const theme = useTheme();
  if (!theme) return null;

  const sx = theme.components.container[variant]?.root;

  return <div className={css(sx)}>{children}</div>;
};
