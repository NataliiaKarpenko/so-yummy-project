import { useSelector } from 'react-redux';
import { selectThemeIsLight } from 'redux/reduxTheme/themeSelector';

const useTheme = () => {
  const isLight = useSelector(selectThemeIsLight);

  return {
    isLight,
  };
};

export default useTheme;
