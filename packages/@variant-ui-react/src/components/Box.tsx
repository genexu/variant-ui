import { FC, HTMLAttributes } from 'react';
import isPropValid from '@emotion/is-prop-valid';
import styled from '@emotion/styled';
import type { TBoxProps } from '@variant-ui/styled-system';

type TBox = FC<HTMLAttributes<HTMLDivElement> & TBoxProps>;

export const Box: TBox = styled('div', {
  shouldForwardProp: (prop) => isPropValid(prop),
})<TBoxProps>`
  display: ${(props) => props.display};
  flex: ${(props) => props.flex};
  flex-direction: ${(props) => props.flexDirection};
  flex-flow: ${(props) => props.flexFlow};
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.color};
  box-shadow: ${(props) => props.boxShadow};
  margin: ${(props) => props.margin}px;
  padding: ${(props) => props.padding}px;
`;
