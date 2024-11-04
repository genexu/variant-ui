import { useId, FC, InputHTMLAttributes } from 'react';
import { cx } from '@emotion/css';
import { useTheme } from '../hooks/useTheme';
import type { TTextFieldProps } from '@variant-ui/styled-system';

export type TTextFieldComponentProps = InputHTMLAttributes<HTMLInputElement> &
  TTextFieldProps & {
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  };

export type TTextField = FC<TTextFieldComponentProps>;

export const TextField: TTextField = ({
  variant = 'default',
  label,
  error,
  ...props
}: TTextFieldComponentProps) => {
  const id = useId();
  const theme = useTheme();

  if (!theme) return null;

  const sx = theme.components.textfield[variant];

  const rootClassNames = [sx.formControl];
  if (error) rootClassNames.push('error');

  return (
    <div className={cx(...rootClassNames)}>
      {label && (
        <label htmlFor={id} className={sx.formControl_label}>
          {label}
        </label>
      )}
      <input id={id} className={sx.formControl_input} {...props} />
    </div>
  );
};