import { useEffect } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const useDarkMode = () => {
  const [darkModeOn, setDarkModeOn] = useLocalStorage("isDarkMode", false);

  useEffect(() => {
    darkModeOn
      ? document.querySelector("body").classList.add("dark-mode")
      : document.querySelector("body").classList.remove("dark-mode");
  }, [darkModeOn]);

  return [darkModeOn, setDarkModeOn];
};

export default useDarkMode;