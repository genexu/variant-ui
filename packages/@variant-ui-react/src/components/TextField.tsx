import { useId, FC, InputHTMLAttributes } from 'react';
import isPropValid from '@emotion/is-prop-valid';
import styled from '@emotion/styled';
import { useTheme } from '../hooks/useTheme';
import type {
  TTextFieldVariant,
  TTextFieldProps,
} from '@variant-ui/styled-system';

type TInputComponentProps = {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
} & TTextFieldProps;

type TInputComponent = FC<
  InputHTMLAttributes<HTMLInputElement> & TInputComponentProps
>;

const Input: TInputComponent = styled('input', {
  shouldForwardProp: (prop) => isPropValid(prop),
})<TInputComponentProps>`
  border-radius: ${(props) => props.borderRadius}px;
`;

export type TTextFieldComponentProps = {
  variant?: TTextFieldVariant;
  label?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
} & TTextFieldProps;

export type TTextField = FC<
  InputHTMLAttributes<HTMLInputElement> & TTextFieldComponentProps
>;

export const TextField: TTextField = ({
  variant = 'default',
  label,
  value,
  onChange,
  ...props
}: TTextFieldComponentProps) => {
  const id = useId();
  const theme = useTheme();

  if (!theme) return null;

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <Input
        id={id}
        value={value}
        onChange={onChange}
        {...theme.components.textfield[variant]}
        {...props}
      />
    </div>
  );
};
