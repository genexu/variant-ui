import { useState } from 'react';
import {
  AppBar,
  Box,
  Container,
  Typography,
  ThemeProvider,
} from '@variant-ui/react';
import materialTheme from '@variant-ui/material-theme';
import bootstrapTheme from '@variant-ui/bootstrap-theme';
import ColorSection from './ColorSection';
import TextFieldSection from './TextFieldSection';
import PaperSection from './PaperSection';
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
      <AppBar position="static">
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Typography variant="h6">Variant UI</Typography>
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
        <Box padding="24px 0">
          <PaperSection />
        </Box>
        <Box padding="24px 0">
          <TextFieldSection />
        </Box>
        <Box padding="24px 0">
          <ColorSection />
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default App;
