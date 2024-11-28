import { CSSProperties, FC, HTMLAttributes, ElementType } from 'react';
import isPropValid from '@emotion/is-prop-valid';
import styled from '@emotion/styled';
import type { TBoxProps } from '@variant-ui/styled-system';
import { CSSInterpolation } from '@emotion/css/create-instance';

type TBoxComponentProps = HTMLAttributes<HTMLDivElement> &
  TBoxProps & {
    as?: ElementType;
  };

type TBox = FC<HTMLAttributes<HTMLDivElement> & TBoxComponentProps>;

export const Box: TBox = styled('div', {
  shouldForwardProp: (prop) => isPropValid(prop),
})<TBoxComponentProps>((props) => {
  const properies = {} as Record<keyof CSSProperties, string | number>;

  if (props.position) properies.position = props.position;

  if (props.top || props.top === 0) properies.top = props.top;
  if (props.right || props.right === 0) properies.right = props.right;
  if (props.bottom || props.bottom === 0) properies.bottom = props.bottom;
  if (props.left || props.left === 0) properies.left = props.left;

  if (props.display) properies.display = props.display;
  if (props.flex) properies.flex = props.flex;
  if (props.flexFlow) properies.flexFlow = props.flexFlow;
  if (props.flexDirection) properies.flexDirection = props.flexDirection;
  if (props.gap) properies.gap = props.gap;
  if (props.alignItems) properies.alignItems = props.alignItems;
  if (props.justifyContent) properies.justifyContent = props.justifyContent;

  if (props.width) {
    properies.width =
      typeof props.width === 'number' ? `${props.width}px` : props.width;
  }
  if (props.minWidth) {
    properies.minWidth =
      typeof props.minWidth === 'number'
        ? `${props.minWidth}px`
        : props.minWidth;
  }
  if (props.height) {
    properies.height =
      typeof props.height === 'number' ? `${props.height}px` : props.height;
  }
  if (props.minHeight) {
    properies.minHeight =
      typeof props.minHeight === 'number'
        ? `${props.minHeight}px`
        : props.minHeight;
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
