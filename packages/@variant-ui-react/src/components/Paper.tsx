import { FC, HTMLAttributes } from 'react';
import { Box } from './Box';
import { useTheme } from '../hooks/useTheme';
import type { TBoxProps, TPaperProps } from '@variant-ui/styled-system';

type TPaperComponentProps = HTMLAttributes<HTMLDivElement> &
  TBoxProps &
  TPaperProps;

type TPaper = FC<TPaperComponentProps>;

export const Paper: TPaper = ({
  children,
  elevation = 0,
  ...props
}: TPaperComponentProps) => {
  const theme = useTheme();
  if (!theme) return null;

  const shadows = theme.shadows;

  return (
    <Box {...props} boxShadow={shadows[elevation]}>
      {children}
    </Box>
  );
};
