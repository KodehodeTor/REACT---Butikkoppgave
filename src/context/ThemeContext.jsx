import { createContext, useState, useEffect } from "react";

// Context for sharing theme and dark-mode-toggle
export const ThemeContext = createContext();
// Gives darkmode state to components
export default function ThemeProvider({ children }) {
  // Loads saved theme from localStorage.
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("dark-mode");
    return savedMode === "true";
  });

  //   Saves and updates body class when dar-mode-toggle is activated.
  useEffect(() => {
    localStorage.setItem("dark-mode", darkMode);

    document.body.classList.toggle("dark", darkMode);
    document.body.classList.toggle("light", !darkMode);
  }, [darkMode]);

  //   Switches between dark and light mode
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };
  // Theme state and toggle available to child components.
  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}
