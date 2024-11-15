import { FC, HTMLAttributes } from 'react';
import { Container } from './Container';
import { Paper } from './Paper';
import { useTheme } from '../hooks/useTheme';
import type { AppBarProps } from '@variant-ui/styled-system';

type TAppBarComponentProps = HTMLAttributes<HTMLHeadElement> & AppBarProps;

type TAppBar = FC<TAppBarComponentProps>;

export const AppBar: TAppBar = ({
  children,
  color = 'white',
  bgColor,
  position = 'fixed',
  elevation = 4,
  ...props
}: TAppBarComponentProps) => {
  const theme = useTheme();
  if (!theme) return null;

  const backgroundColor = bgColor || theme.colors.primary;

  return (
    <Paper
      {...props}
      as="header"
      color={color}
      bgColor={backgroundColor}
      position={position}
      elevation={elevation}
      minHeight={48}
      display="flex"
      alignItems="center"
      top={0}
      left={0}
      right={0}
    >
      <Container>{children}</Container>
    </Paper>
  );
};
