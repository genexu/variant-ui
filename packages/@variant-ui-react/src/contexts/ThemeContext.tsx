import { ReactNode, createContext, useState, useEffect, useMemo } from 'react';
import type { TTheme } from '@variant-ui/styled-system';

export type TThemeContext = {
  theme: TTheme | null;
  setTheme: (theme: TTheme) => void;
};

export const ThemeContext = createContext<TThemeContext>({
  theme: null,
  setTheme: () => {},
});

export type TThemeProviderProps = {
  children: ReactNode;
  theme: TTheme;
};

export const ThemeProvider = ({ children, theme }: TThemeProviderProps) => {
  const [uTheme, setUTheme] = useState<TTheme>(theme);

  useEffect(() => {
    setUTheme(theme);
  }, [theme]);

  const value = useMemo(
    () => ({ theme: uTheme, setTheme: setUTheme }),
    [uTheme],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
