import { FC, HTMLAttributes } from 'react';
import { css } from '@emotion/css';
import { Container } from './Container';
import { Paper } from './Paper';
import { useTheme } from '../hooks/useTheme';
import type { TAppBarProps } from '@variant-ui/styled-system';

type TAppBarComponentProps = HTMLAttributes<HTMLHeadElement> & TAppBarProps;

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
  const sx = theme.components.appbar.default;

  return (
    <Paper
      className={css(sx)}
      {...props}
      as="header"
      color={color}
      bgColor={backgroundColor}
      position={position}
      elevation={elevation}
      minHeight={48}
      display="flex"
      alignItems="center"
    >
      <Container>{children}</Container>
    </Paper>
  );
};
