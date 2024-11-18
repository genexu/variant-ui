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

  console.log(theme.components.typography[variant]);

  return (
    <TypographyBase
      as={variant}
      className={theme.components.typography[variant]}
      color={color}
      {...props}
    >
      {children}
    </TypographyBase>
  );
};
