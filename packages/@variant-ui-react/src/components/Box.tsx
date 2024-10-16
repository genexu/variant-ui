import { FC, HTMLAttributes } from 'react';
import isPropValid from '@emotion/is-prop-valid';
import styled from '@emotion/styled';

type TExtraProps = {
  display?: string;
  flex?: number;
  flexDirection?: string;
  width?: number;
  height?: number;
  bgColor?: string;
  color?: string;
};

type TBox = FC<HTMLAttributes<HTMLDivElement> & TExtraProps>;

export const Box: TBox = styled('div', {
  shouldForwardProp: (prop) => isPropValid(prop),
})<TExtraProps>`
  display: ${(props) => props.display};
  flex: ${(props) => props.flex};
  flex-direction: ${(props) => props.flexDirection};
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.color};
`;
