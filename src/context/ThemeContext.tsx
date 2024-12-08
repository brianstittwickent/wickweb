import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
}

const ThemeContext = createContext<ThemeContextType>({ theme: 'light' });

export const useTheme = () => useContext(ThemeContext);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    const updateTheme = () => {
      const now = new Date();
      const hour = now.getHours();
      // Dark theme between 6 PM (18:00) and 6 AM (6:00)
      setTheme(hour >= 18 || hour < 6 ? 'dark' : 'light');
    };

    // Initial theme setting
    updateTheme();

    // Update theme every minute
    const interval = setInterval(updateTheme, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme }}>
      <div data-theme={theme}>{children}</div>
    </ThemeContext.Provider>
  );
};
