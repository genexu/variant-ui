import { FC, HTMLAttributes, ReactNode } from 'react';
import isPropValid from '@emotion/is-prop-valid';
import styled from '@emotion/styled';
import { useTheme } from '../hooks/useTheme';
import type {
  TTypographyVariant,
  TTypographyProps,
} from '@variant-ui/styled-system';
import { css } from '@emotion/css';

type TTypographyBaseComponentProps = {
  as: TTypographyVariant;
} & TTypographyProps;

type TTypographtBase = FC<
  HTMLAttributes<HTMLElement> & TTypographyBaseComponentProps
>;

const TypographyBase: TTypographtBase = styled('span', {
  shouldForwardProp: (prop) => isPropValid(prop),
})<TTypographyBaseComponentProps>`
  margin-top: 0;
  color: ${(props) => props.color};
  ${(props) => props.fontSize && `font-size: ${props.fontSize}`};
  ${(props) => props.fontWeight && `font-weight: ${props.fontWeight}`};
  ${(props) => props.lineHeight && `line-height: ${props.lineHeight}`};
  ${(props) => !props.gutterBottom && 'margin-bottom: 0'};
`;

type TTypographyComponentProps = {
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

  const sx = theme.components.typography[variant]?.root;

  return (
    <TypographyBase as={variant} className={css(sx)} color={color} {...props}>
      {children}
    </TypographyBase>
  );
};
