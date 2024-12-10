import { useRef, useState } from 'react';
import {
  Box,
  Button,
  ListItemButton,
  Menu,
  Typography,
} from '@variant-ui/react';

const MenuSection = () => {
  const anchorEl = useRef<HTMLButtonElement>(null);
  const outlinedButtonAnchorEl = useRef<HTMLButtonElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isOutlinedButtonMenuOpen, setIsOutlinedButtonMenuOpen] =
    useState<boolean>(false);

  return (
    <>
      <Typography variant="h4" gutterBottom>
        Menu
      </Typography>
      <Box
        display="flex"
        padding={24}
        borderWidth={1}
        borderRadius={4}
        borderStyle="solid"
        borderColor="#DFDFDF"
      >
        <Box margin="0 12px 0 0">
          <Button ref={anchorEl} onClick={() => setIsMenuOpen(true)}>
            Open Menu
          </Button>
        </Box>
        <Menu
          open={isMenuOpen}
          anchorEl={anchorEl.current}
          onClose={() => setIsMenuOpen(false)}
        >
          <ListItemButton>Menu Item 1</ListItemButton>
          <ListItemButton>Menu Item 2</ListItemButton>
          <ListItemButton>Menu Item 3</ListItemButton>
        </Menu>
        <Box margin="0 12px 0 0">
          <Button
            ref={outlinedButtonAnchorEl}
            variant="outlined"
            onClick={() => setIsOutlinedButtonMenuOpen(true)}
          >
            Open Menu
          </Button>
        </Box>
        <Menu
          open={isOutlinedButtonMenuOpen}
          anchorEl={outlinedButtonAnchorEl.current}
          onClose={() => setIsOutlinedButtonMenuOpen(false)}
        >
          <ListItemButton>Menu Item 4</ListItemButton>
          <ListItemButton>Menu Item 5</ListItemButton>
          <ListItemButton>Menu Item 6</ListItemButton>
        </Menu>
      </Box>
    </>
  );
};

export default MenuSection;
