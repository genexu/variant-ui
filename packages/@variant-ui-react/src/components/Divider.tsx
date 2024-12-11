import { css } from '@emotion/css';
import { useTheme } from '../hooks/useTheme';
import { Box, TBoxProps } from './Box';
import type { FC, HTMLAttributes } from 'react';
import type { TDividerProps } from '@variant-ui/styled-system';

export type TDividerComponentProps = HTMLAttributes<HTMLHRElement> &
  TBoxProps &
  TDividerProps;

export type TDivider = FC<TDividerComponentProps>;

export const Divider: TDivider = ({ ...props }) => {
  const theme = useTheme();

  if (!theme) return null;

  const sx = theme.components.divider?.default?.root;

  return <Box as="hr" className={css(sx)} {...props} />;
};
