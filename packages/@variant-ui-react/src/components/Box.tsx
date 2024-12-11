import isPropValid from '@emotion/is-prop-valid';
import styled from '@emotion/styled';
import { forwardRef } from 'react';
import type { CSSProperties, HTMLAttributes } from 'react';
import type { CSSInterpolation } from '@emotion/css/create-instance';
import { useTheme } from '../hooks/useTheme';

export type TBoxProps = {
  as?: keyof JSX.IntrinsicElements;
} & HTMLAttributes<HTMLDivElement> &
  CSSProperties;

const StyledBox = styled('div', {
  shouldForwardProp: (prop) => isPropValid(prop),
})<TBoxProps>((props) => {
  const properies: CSSInterpolation = {};

  // const { theme } = props;
  // TODO: implement size transformation; xs, sm, md, lg, xl .etc.
  // TODO: implement color transformation; primary, secondary, info, error .etc.

  Object.entries(props).forEach(([key, value]) => {
    // filter non-css props
    if (['theme', 'children', 'as', 'className'].includes(key)) return;
    properies[key] = value;
  });

  return properies;
});

const Box = forwardRef<HTMLDivElement, TBoxProps>((props, ref) => {
  const theme = useTheme();
  if (!theme) return null;

  return <StyledBox theme={theme} {...props} ref={ref} />;
});

Box.displayName = 'Box';

export { Box };
