import isPropValid from '@emotion/is-prop-valid';
import styled from '@emotion/styled';
import { forwardRef } from 'react';
import type { CSSProperties, HTMLAttributes } from 'react';
import type { CSSInterpolation } from '@emotion/css/create-instance';

type TBoxProps = {
  as?: keyof JSX.IntrinsicElements;
} & HTMLAttributes<HTMLDivElement> &
  CSSProperties;

const StyledBox = styled('div', {
  shouldForwardProp: (prop) => isPropValid(prop),
})<TBoxProps>((props) => {
  const properies: CSSInterpolation = {};
  if (props.position) properies.position = props.position;

  Object.entries(props).forEach(([key, value]) => {
    const allowedKeys = [
      'top',
      'right',
      'bottom',
      'left',
      'display',
      'flex',
      'flexFlow',
      'flexDirection',
      'gap',
      'alignItems',
      'justifyContent',
      'width',
      'minWidth',
      'height',
      'minHeight',
      'backgroundColor',
      'color',
      'boxShadow',
      'margin',
      'padding',
      'borderWidth',
      'borderStyle',
      'borderColor',
      'borderRadius',
    ];

    if (!allowedKeys.includes(key)) return;
    properies[key] = value;
  });

  return properies;
});

const Box = forwardRef<HTMLDivElement, TBoxProps>((props, ref) => {
  return <StyledBox {...props} ref={ref} />;
});

Box.displayName = 'Box';

export { Box };
