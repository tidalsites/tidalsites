import { useState, useEffect } from "react";

export const useTheme = () => {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    // Check if the user has a theme preference in the browser
    if (window.matchMedia("(prefers-color-scheme: light)").matches) {
      return setTheme("light");
    }
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return { theme, toggleTheme };
};
