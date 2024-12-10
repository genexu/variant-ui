import { forwardRef } from 'react';
import { Box } from './Box';
import { useTheme } from '../hooks/useTheme';
import type { CSSProperties, FC, HTMLAttributes } from 'react';
import type { TPaperProps } from '@variant-ui/styled-system';

type TPaperComponentProps = HTMLAttributes<HTMLElement> &
  CSSProperties &
  TPaperProps;

type TPaper = FC<TPaperComponentProps>;

const Paper: TPaper = forwardRef<HTMLDivElement, TPaperComponentProps>(
  ({ children, elevation = 0, ...props }: TPaperComponentProps, ref) => {
    const theme = useTheme();
    if (!theme) return null;

    const shadows = theme.shadows;

    return (
      <Box {...props} ref={ref} boxShadow={shadows[elevation]}>
        {children}
      </Box>
    );
  },
);

Paper.displayName = 'Paper';

export { Paper };
