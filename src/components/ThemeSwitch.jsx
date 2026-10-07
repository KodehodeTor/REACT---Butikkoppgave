import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useContext } from "react";
import "./ThemeSwitch.css";
import { ThemeContext } from "../context/ThemeContext";

// Function to toggle light or dark theme.
export default function DarkModeToggle() {
  // Stores which mode is enabled.
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <DarkModeSwitch
      style={{}}
      // Keeps switch synched with DarkMode state.
      checked={darkMode}
      // ToggleMode is activated on on change.
      onChange={toggleDarkMode}
      size={50}
    />
  );
}
