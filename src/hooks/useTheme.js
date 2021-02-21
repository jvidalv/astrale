import { useGlobals } from '../contexts/Global';

const THEME_DARK = 'dark';

export const useIsDark = () => {
  const [{ theme }] = useGlobals();
  return theme === THEME_DARK;
};
