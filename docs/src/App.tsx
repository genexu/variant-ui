import { useState } from 'react';
import { Container, Typography, ThemeProvider } from '@variant-ui/react';
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
      <Container>
        <Typography variant="h3">Variant UI</Typography>
        <select name="theme" onChange={(e) => setTheme(themes[e.target.value])}>
          <option value="material">Material</option>
          <option value="bootstrap">Bootstrap</option>
        </select>
        <PaperSection />
        <TextFieldSection />
        <ColorSection />
      </Container>
    </ThemeProvider>
  );
};

export default App;
