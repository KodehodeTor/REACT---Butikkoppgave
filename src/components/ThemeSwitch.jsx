// Copying all my code from ToDoList React Oppgave due to time constraints. :)

import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useState } from "react";
import "./ThemeSwitch.css";

// Function to toggle light or dark theme.
export default function DarkModeToggle() {
  // Stores which mode is enabled.
  const [isDarkMode, setDarkMode] = useState(false);
  // Updates dark mode state and applies the class to body element.
  const toggleDarkMode = (checked) => {
    setDarkMode(checked);
    // Add or remove class based on current state.
    document.body.classList.toggle("dark", checked);
    document.body.classList.toggle("light", !checked);
  };

  return (
    <DarkModeSwitch
      style={{}}
      // Keeps switch synched with DarkMode state.
      checked={isDarkMode}
      // ToggleMode is activated on on change.
      onChange={toggleDarkMode}
      size={50}
    />
  );
}
