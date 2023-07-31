import { useDispatch, useSelector } from 'react-redux';
import icons from '../../../../sprite.svg';
import { StyledThemeToggler } from './ThemeToggler.styled';
import { toggleTheme } from 'redux/reduxTheme/themeSlice';
import { selectThemeIsLight } from 'redux/reduxTheme/themeSelector';

const ThemeToggler = () => {
  const dispatch = useDispatch();
  const isLight = useSelector(selectThemeIsLight);

  console.log(isLight);

  const onToggleTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <StyledThemeToggler
      className={isLight ? 'Off' : 'On'}
      type="button"
      onClick={onToggleTheme}
    >
      <svg width="21" height="21" aria-label="switch">
        <defs>
          <linearGradient id="grad1" gradientTransform="rotate(180)">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#E8EAEA " />
          </linearGradient>
        </defs>
        <use href={icons + '#switch'}></use>
      </svg>
    </StyledThemeToggler>
  );
};

export default ThemeToggler;
