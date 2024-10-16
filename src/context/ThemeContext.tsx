import React, { createContext, useContext, useState, ReactNode } from "react";
import { useColorScheme } from "react-native";

// Define types for Theme
type Theme = "light" | "dark" | "system";

type ThemeContextType = {
  theme: Theme;
  currentTheme: Theme;
  setTheme: (theme: Theme) => void;
};

// Create ThemeContext (not a namespace, just a value)
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Custom hook to use ThemeContext
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

// ThemeProvider component
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const systemScheme = useColorScheme(); // Detect system theme (light or dark)
  const [theme, setTheme] = useState<Theme>("system"); // Default theme is 'system'

  // Function to determine the current theme
  const getCurrentTheme = (): Theme => {
    if (theme === "system") {
      return systemScheme as Theme; // Return system theme if 'system' is selected
    }
    return theme; // Return manually selected theme (light or dark)
  };

  const currentTheme = getCurrentTheme(); // Get the active theme

  return (
    <ThemeContext.Provider value={{ theme, currentTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
