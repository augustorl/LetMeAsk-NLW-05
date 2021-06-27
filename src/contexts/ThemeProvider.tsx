import React, { createContext, useCallback, useContext, useState } from "react";
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../styles/themes';

export interface Theme {
  name: string;
  colors: {
    black: string,
    shadow: string,
    white50: string,
    white100: string,
    white150: string,
    gray50: string,
    gray100: string,
    gray150: string,
    gray200: string,
    red: string;
    purple: string;
    pink: string;
  }
}
interface ThemeContextData { theme: Theme; toggleTheme: () => void };

export const ThemeContext = createContext<ThemeContextData>(
  {} as ThemeContextData
);
export const useTheme = () => useContext(ThemeContext);

export const CustomThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(lightTheme);
  const toggleTheme = useCallback(() => {
    if (theme.name === 'light'){
      setTheme(darkTheme);
    }
    else if (theme.name === 'dark') {
      setTheme(lightTheme);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};