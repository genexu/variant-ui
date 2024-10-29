import { useId, FC, InputHTMLAttributes } from 'react';
import isPropValid from '@emotion/is-prop-valid';
import styled from '@emotion/styled';
import { useTheme } from '../hooks/useTheme';
import type { TModifier, TTextFieldProps } from '@variant-ui/styled-system';

type TFormControlComponentProps = TModifier;

type TFormControlComponent = FC<TFormControlComponentProps>;

const FormControl: TFormControlComponent = styled('div', {
  shouldForwardProp: (prop) => isPropValid(prop),
})<TFormControlComponentProps>`
  ${(props) => props.defaultSx}
`;

type TLabelComponentProps = {
  htmlFor: string;
} & TModifier;

type TLabelComponent = FC<
  InputHTMLAttributes<HTMLLabelElement> & TLabelComponentProps
>;

const Label: TLabelComponent = styled('label', {
  shouldForwardProp: (prop) => isPropValid(prop),
})<TLabelComponentProps>`
  ${(props) => props.defaultSx}
`;

type TInputComponentProps = {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
} & TModifier;

type TInputComponent = FC<
  InputHTMLAttributes<HTMLInputElement> & TInputComponentProps
>;

const Input: TInputComponent = styled('input', {
  shouldForwardProp: (prop) => isPropValid(prop),
})<TInputComponentProps>`
  appearance: none;
  ${(props) => props.defaultSx}
  &:focus {
    ${(props) => props.focusSx}
  }
  &:active {
    ${(props) => props.activeSx}
  }
  &:hover {
    ${(props) => props.hoverSx}
  }
  &:focus-visible {
    outline: 0;
  }
`;

export type TTextFieldComponentProps = InputHTMLAttributes<HTMLInputElement> &
  TTextFieldProps & {
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  };

export type TTextField = FC<TTextFieldComponentProps>;

export const TextField: TTextField = ({
  variant = 'default',
  label,
  onChange,
  ...props
}: TTextFieldComponentProps) => {
  const id = useId();
  const theme = useTheme();

  if (!theme) return null;

  const e = theme.components.textfield[variant];

  return (
    <FormControl {...e.formControl}>
      {label && (
        <Label htmlFor={id} {...e.formControl_label}>
          {label}
        </Label>
      )}
      <Input id={id} onChange={onChange} {...e.formControl_input} {...props} />
    </FormControl>
  );
};
