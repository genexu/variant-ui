import { useState } from 'react';
import { HelloWorld, ThemeProvider } from '@variant-ui/react';
import materialTheme from '@variant-ui/material-theme';
import bootstrapTheme from '@variant-ui/bootstrap-theme';
import ColorSection from './ColorSection';
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
      <select name="theme" onChange={(e) => setTheme(themes[e.target.value])}>
        <option value="material">Material</option>
        <option value="bootstrap">Bootstrap</option>
      </select>
      <HelloWorld name="Tester" />
      <ColorSection />
    </ThemeProvider>
  );
};

export default App;
