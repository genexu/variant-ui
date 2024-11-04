import { CSSProperties, FC, HTMLAttributes } from 'react';
import isPropValid from '@emotion/is-prop-valid';
import styled from '@emotion/styled';
import type { TBoxProps } from '@variant-ui/styled-system';
import { CSSInterpolation } from '@emotion/css/create-instance';

type TBox = FC<HTMLAttributes<HTMLDivElement> & TBoxProps>;

export const Box: TBox = styled('div', {
  shouldForwardProp: (prop) => isPropValid(prop),
})<TBoxProps>((props) => {
  const properies = {} as Record<keyof CSSProperties, string | number>;

  if (props.display) properies.display = props.display;
  if (props.flex) properies.flex = props.flex;
  if (props.flexFlow) properies.flexFlow = props.flexFlow;
  if (props.flexDirection) properies.flexDirection = props.flexDirection;
  if (props.width) {
    properies.width =
      typeof props.width === 'number' ? `${props.width}px` : props.width;
  }
  if (props.height) {
    properies.height =
      typeof props.height === 'number' ? `${props.height}px` : props.height;
  }
  if (props.bgColor) properies.backgroundColor = props.bgColor;
  if (props.color) properies.color = props.color;
  if (props.boxShadow) properies.boxShadow = props.boxShadow;
  if (props.margin) {
    properies.margin =
      typeof props.margin === 'number' ? `${props.margin}px` : props.margin;
  }
  if (props.padding) {
    properies.padding =
      typeof props.padding === 'number' ? `${props.padding}px` : props.padding;
  }
  if (props.borderWidth) {
    properies.borderWidth =
      typeof props.borderWidth === 'number'
        ? `${props.borderWidth}px`
        : props.borderWidth;
    properies.borderStyle = 'solid';
    properies.borderColor = 'black';
  }

  if (props.borderStyle) properies.borderStyle = props.borderStyle;
  if (props.borderColor) properies.borderColor = props.borderColor;

  if (props.borderRadius) {
    properies.borderRadius =
      typeof props.borderRadius === 'number'
        ? `${props.borderRadius}px`
        : props.borderRadius;
  }

  return properies as CSSInterpolation;
});
