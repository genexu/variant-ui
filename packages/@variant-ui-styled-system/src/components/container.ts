import { TComponent } from '../system/component';
import type { TSize } from '../system/size';

export type TContainerVariant = 'fluid' | 'fixed';

export type TContainerStructureElement = 'root';

export type TContainer = TComponent<
  TContainerVariant,
  TContainerStructureElement
>;

export type TContainerProps = {
  variant?: TContainerVariant;
  maxWidth?: TSize | string | number;
};
