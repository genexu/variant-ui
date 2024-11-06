import { TSize } from '../system/size';

export type TContainerVariant = 'fluid' | 'fixed';

export type TContainerProps = {
  variant?: TContainerVariant;
  maxWidth?: TSize | number;
};

export type TContainerSx = string;

export type TContainer = {
  [key in TContainerVariant]: TContainerSx;
};
