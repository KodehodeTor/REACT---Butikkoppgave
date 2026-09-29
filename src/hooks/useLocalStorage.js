import { useState, useEffect } from "react";

export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const stored = localStorage.getItem(key);

      return stored ? JSON.parse(stored) : initialValue;
    } catch (error) {
      console.error("Could not get LocalStorage", error);
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error("Could not write to storage", error);
    }
  }, [key, value]);

  return [value, setValue];
}
