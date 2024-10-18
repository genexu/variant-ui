import { FC, HTMLAttributes, ReactNode } from 'react';
import { TTypographyVariant } from '@variant-ui/styled-system';
import isPropValid from '@emotion/is-prop-valid';
import styled from '@emotion/styled';
import { useTheme } from '../hooks/useTheme';

type TFontStyleProps = {
  fontSize?: number | string;
  lineHeight?: number | string;
  fontWeight?: number;
  fontStyle?: string;
};

type TTypographyBaseProps = {
  as: TTypographyVariant;
  color?: string;
} & TFontStyleProps;

type TTypographtBase = FC<HTMLAttributes<HTMLElement> & TTypographyBaseProps>;

const TypographyBase: TTypographtBase = styled('span', {
  shouldForwardProp: (prop) => isPropValid(prop),
})<TTypographyBaseProps>`
  color: ${(props) => props.color};
  font-size: ${(props) =>
    typeof props.fontSize === 'number'
      ? `${props.fontSize}px`
      : props.fontSize};
  line-height: ${(props) =>
    typeof props.lineHeight === 'number'
      ? `${props.lineHeight}px`
      : props.lineHeight};
  font-weight: ${(props) => props.fontWeight};
  font-style: ${(props) => props.fontStyle};
`;

type TTypographyProps = {
  variant?: TTypographyVariant;
  color?: string | null;
  children: ReactNode;
} & TFontStyleProps;

type TTypographyComponent = FC<TTypographyProps>;

export const Typography: TTypographyComponent = ({
  variant = 'p',
  color = null,
  children,
  ...props
}: TTypographyProps) => {
  const theme = useTheme();
  if (!theme) return null;

  if (!color) color = theme.colors.black;

  return (
    <TypographyBase
      as={variant}
      color={color}
      {...theme.typography[variant]}
      {...props}
    >
      {children}
    </TypographyBase>
  );
};
