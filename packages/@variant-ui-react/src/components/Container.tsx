// Container component
// props
//  children: ReactNode
//  variant?: 'fluid' | 'fixed'; default: fluid
//  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'; default: lg

import { FC, HTMLAttributes } from 'react';
import { useTheme } from '../hooks/useTheme';
import type { TContainerProps } from '@variant-ui/styled-system';

export type TContainerComponentProps = HTMLAttributes<HTMLDivElement> &
  TContainerProps;

export type TContainer = FC<TContainerComponentProps>;

export const Container: TContainer = ({
  children,
  variant = 'fluid',
}: TContainerComponentProps) => {
  const theme = useTheme();

  if (!theme) return null;

  const sx = theme.components.container[variant];

  return <div className={sx}>{children}</div>;
};
