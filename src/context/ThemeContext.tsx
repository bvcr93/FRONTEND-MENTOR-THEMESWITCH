import { useContext, createContext, useState, ReactNode } from "react";

interface ThemeProviderProps {
  children: ReactNode;
}
interface IThemeContext {
  switchTheme: () => void;
  theme: boolean | string
}

export const ThemeContext = createContext({} as IThemeContext);

export function useTheme() {
  return useContext(ThemeContext);
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState(false);

  function switchTheme() {
    setTheme(!theme);
    console.log(theme);
  }

  return (
    <ThemeContext.Provider value={{ switchTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
}
