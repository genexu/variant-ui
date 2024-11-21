import { useState } from 'react';
import {
  AppBar,
  Box,
  Container,
  Paper,
  Typography,
  ThemeProvider,
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
        >
          <Box padding="14px">
            <Typography variant="h1" fontSize="24px" fontWeight={400}>
              Variant UI
            </Typography>
          </Box>
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
