import { FC, HTMLAttributes, ReactNode } from 'react';
import isPropValid from '@emotion/is-prop-valid';
import styled from '@emotion/styled';
import { useTheme } from '../hooks/useTheme';
import type {
  TTypographyVariant,
  TTypographyProps,
} from '@variant-ui/styled-system';

type TTypographyBaseComponentProps = {
  as: TTypographyVariant;
  color?: string;
} & TTypographyProps;

type TTypographtBase = FC<
  HTMLAttributes<HTMLElement> & TTypographyBaseComponentProps
>;

const TypographyBase: TTypographtBase = styled('span', {
  shouldForwardProp: (prop) => isPropValid(prop),
})<TTypographyBaseComponentProps>`
  color: ${(props) => props.color};
  font-size: ${(props) =>
    typeof props.fontSize === 'number'
      ? `${props.fontSize}px`
      : props.fontSize};
  line-height: ${(props) => props.lineHeight};
  font-weight: ${(props) => props.fontWeight};
  font-style: ${(props) => props.fontStyle};
  margin: 0px;
  margin-bottom: ${(props) => props.gutterBottom && '0.35em'};
`;

type TTypographyComponentProps = {
  variant?: TTypographyVariant;
  color?: string;
  children: ReactNode;
} & TTypographyProps;

type TTypographyComponent = FC<TTypographyComponentProps>;

export const Typography: TTypographyComponent = ({
  variant = 'p',
  color = 'inherit',
  children,
  ...props
}: TTypographyComponentProps) => {
  const theme = useTheme();
  if (!theme) return null;

  return (
    <TypographyBase
      as={variant}
      color={color}
      {...theme.components.typography[variant]}
      {...props}
    >
      {children}
    </TypographyBase>
  );
};
