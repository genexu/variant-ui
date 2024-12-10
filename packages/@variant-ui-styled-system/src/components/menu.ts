import type { TComponent } from '../system/component';

export type TMenuVariant = 'default';

export type TMenuStructureElement = 'root';

export type TMenu = TComponent<TMenuVariant, TMenuStructureElement>;

export type TMenuProps = {
  open: boolean;
  anchorEl?: HTMLElement | null;
  onClose?: () => void;
};
