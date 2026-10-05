import { useState, useEffect } from "react";

// Hook for storing and getting state from localStorage.
export function useLocalStorage(key, initialValue) {
  // USes exisisting value from localStorage or falls back to initial value if nothing is stored.
  const [value, setValue] = useState(() => {
    try {
      // Stored value from localStorage using key.
      const stored = localStorage.getItem(key);
      // Converts JSON string back to JS values.
      // Uses initialValue if no value has been stored.
      return stored ? JSON.parse(stored) : initialValue;
    } catch (error) {
      // Handle errors.
      console.error("Could not get LocalStorage", error);
    }
  });

  // Runs whenever key or value changes and saves the current value to LocalStorage.
  useEffect(() => {
    try {
      // Converts JS value to JSON string before storing it.
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      // Handles error.
      console.error("Could not write to storage", error);
    }
  }, [key, value]);
  // Returns value, like useState.
  return [value, setValue];
}
