import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = (key, initialValue) => {
    const [someValue, setSomeValue] = useLocalStorage(key, initialValue)
    const body = document.querySelector('body');
        someValue ? body.classList.add('dark-mode'): body.classList.remove("dark-mode");
      return [someValue, setSomeValue];
}