import type { TComponent } from '../system/component';

export type TDividerVariant = 'default';

export type TDividerStructureElement = 'root';

export type TDivider = TComponent<TDividerVariant, TDividerStructureElement>;

export type TDividerProps = {
  orientation?: 'horizontal' | 'vertical';
};
