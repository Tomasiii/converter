import { useLayoutEffect, useState } from "react";

const isDarkTheme = window?.matchMedia("(prefers-color-scheme: dark)").matches;
const defaultTheme = isDarkTheme ? "dark" : "light";

export const useTheme = () => {
  const [theme, setTheme] = useState<"dark" | "light">(
    (localStorage.getItem("app-theme") as "dark" | "light") || defaultTheme
  );

  useLayoutEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("app-theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));

  return { theme, setTheme, toggleTheme };
};
