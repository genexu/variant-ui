import { useEffect, useRef, useState } from 'react';
import { List } from '../List';
import { css } from '@emotion/css';
import { useTheme } from '../../hooks/useTheme';
import type { FC, OlHTMLAttributes } from 'react';
import type { TMenuProps } from '@variant-ui/styled-system';
import type { TListComponentProps } from '../List';
import { Box } from '../Box';

export type TMenuComponentProps = OlHTMLAttributes<HTMLOListElement> &
  TListComponentProps &
  TMenuProps;

export type TMenu = FC<TMenuComponentProps>;

export const Menu: TMenu = ({
  children,
  open,
  anchorEl,
  onClose,
  ...props
}: TMenuComponentProps) => {
  const ref = useRef<HTMLUListElement>(null);
  const theme = useTheme();
  // Local state to handle the click outside the menu
  const [ownStateOpen, setOwnStateOpen] = useState<boolean>(false);

  useEffect(() => {
    if (!open) return;

    const handleOutsideClick = (e: MouseEvent) => {
      if (!open || !ownStateOpen) return;
      if (!ref.current || ref.current.contains(e.target as Node)) return;
      setOwnStateOpen(false);
      onClose?.();
    };

    document.addEventListener('click', handleOutsideClick);
    setOwnStateOpen(true);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [ref, open, ownStateOpen, onClose]);

  if (!theme) return null;
  if (!open) return null;

  const sx = theme.components.menu?.default?.root;

  const top = anchorEl?.getBoundingClientRect().bottom;
  const left = anchorEl?.getBoundingClientRect().left;

  return (
    <Box position="absolute" top={top} left={left}>
      <List ref={ref} className={css(sx)} {...props}>
        {children}
      </List>
    </Box>
  );
};
