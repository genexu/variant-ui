import { useState } from 'react';
import {
  AppBar,
  Box,
  Container,
  Paper,
  Typography,
  ThemeProvider,
  List,
  ListItem,
  ListItemButton,
} from '@variant-ui/react';
import materialTheme from '@variant-ui/material-theme';
import bootstrapTheme from '@variant-ui/bootstrap-theme';
import ColorSection from './ColorSection';
import TextFieldSection from './TextFieldSection';
import PaperSection from './PaperSection';
import ButtonSection from './ButtonSection';
import type { TTheme } from '@variant-ui/styled-system';

const App = () => {
  const [theme, setTheme] = useState<TTheme>(materialTheme);

  const themes = {
    material: materialTheme,
    bootstrap: bootstrapTheme,
  } as {
    [key: string]: TTheme;
  };

  return (
    <ThemeProvider theme={theme}>
      <Box display="flex">
        <Paper
          position="fixed"
          height="100vh"
          width="240px"
          borderWidth="0 1px 0 0"
          borderColor="#DFDFDF"
          style={{ zIndex: 9999 }}
        >
          <Box padding="10px 16px">
            <Typography variant="h1" fontSize="24px" fontWeight={400}>
              Variant UI
            </Typography>
          </Box>
          <div
            id="divider"
            style={{ height: '1px', backgroundColor: '#DFDFDF' }}
          />
          <List>
            <ListItemButton>Overview</ListItemButton>
            <ListItemButton>Getting Started</ListItemButton>
            <ListItemButton>Color</ListItemButton>
            <ListItemButton>Theme</ListItemButton>
            <ListItemButton>Support</ListItemButton>
            <ListItemButton>FAQs</ListItemButton>
          </List>
          <div
            id="divider"
            style={{ height: '1px', backgroundColor: '#DFDFDF' }}
          />
          <List>
            <ListItem>
              <Typography fontSize="14px" fontWeight={600}>
                LAYOUT
              </Typography>
            </ListItem>
            <ListItemButton>Breakpoints</ListItemButton>
            <ListItemButton>Box</ListItemButton>
            <ListItemButton>Container</ListItemButton>
            <ListItemButton>Stack</ListItemButton>
          </List>
          <div
            id="divider"
            style={{ height: '1px', backgroundColor: '#DFDFDF' }}
          />
          <List>
            <ListItem>
              <Typography fontSize="14px" fontWeight={600}>
                COMPONENTS
              </Typography>
            </ListItem>
            <ListItemButton>AppBar</ListItemButton>
            <ListItemButton>Badge</ListItemButton>
            <ListItemButton>Button</ListItemButton>
            <ListItemButton>Card</ListItemButton>
            <ListItemButton>Table</ListItemButton>
            <ListItemButton>Tabs</ListItemButton>
            <ListItemButton>Typography</ListItemButton>
            <ListItemButton>TextField</ListItemButton>
            <ListItemButton>List</ListItemButton>
            <ListItemButton>Menu</ListItemButton>
          </List>
        </Paper>
        <Box flex={1} position="relative" padding="0 0 0 240px">
          <AppBar position="fixed" left="240px" right="0">
            <Box display="flex" alignItems="center">
              <select
                name="theme"
                onChange={(e) => setTheme(themes[e.target.value])}
              >
                <option value="material">Material</option>
                <option value="bootstrap">Bootstrap</option>
              </select>
            </Box>
          </AppBar>
          <Container>
            <Box padding="48px 0 0 0" /> {/* The baseline for AppBar */}
            <Box padding="12px 0">
              <ButtonSection />
            </Box>
            <Box padding="12px 0">
              <PaperSection />
            </Box>
            <Box padding="12px 0">
              <TextFieldSection />
            </Box>
            <Box padding="12px 0">
              <ColorSection />
            </Box>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default App;
