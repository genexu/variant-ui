import { colors } from './base';
import type {
  TTextFieldVariant,
  TTextFieldSx,
} from '@variant-ui/styled-system';

const defaultTextFieldSx: TTextFieldSx = {
  formControl: {
    defaultSx: `
      position: relative;
      padding-top: 20px;
      &:before {
        left: 0px;
        right: 0px;
        bottom: 0px;
        content: " ";
        position: absolute;
        border-bottom: 1px solid ${colors.black};
        transition: border-bottom-color 200ms cubic-bezier(0.4, 0, 0.2, 1);
      }

      &:has(:focus-within) {
        &:before {
          border-bottom: 2px solid ${colors.primary};
        }
        label {
          color: ${colors.primary};
          transform-origin: top left;
          transform: translate(0px, 0px) scale(0.75);
        }
      }

      &:has(:hover:not(:focus-within)) {
        &:before {
          border-bottom: 2px solid ${colors.black};
        }
      }
    `,
  },
  formControl_label: {
    defaultSx: `
      position: absolute;
      top: 0;
      left: 0;
      transform-origin: top left;
      transform: translate(0px, 20px) scale(1);
      transition: color 200ms cubic-bezier(0, 0, 0.2, 1), transform 200ms cubic-bezier(0, 0, 0.2, 1);
    `,
  },
  formControl_input: {
    defaultSx: `
      display: flex;
      width: 100%;
      padding: 4px 0px 5px;
      border: 0;

      ::placeholder {
        color: transparent;
      }
    `,
  },
};

export const textfield: Record<TTextFieldVariant, TTextFieldSx> = {
  default: defaultTextFieldSx,
  outlined: defaultTextFieldSx,
  'outlined-floating': defaultTextFieldSx,
  filled: defaultTextFieldSx,
  'filled-floating': defaultTextFieldSx,
  floating: defaultTextFieldSx,
};
