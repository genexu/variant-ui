import { TComponent } from '../system/component';

export type TListVariant = 'default';

export type TListStructureElement = 'root' | 'item' | 'itemButton';

export type TList = TComponent<TListVariant, TListStructureElement>;
