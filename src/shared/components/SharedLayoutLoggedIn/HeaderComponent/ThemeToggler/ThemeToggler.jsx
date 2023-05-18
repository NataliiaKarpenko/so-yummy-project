import icons from '../../../../sprite.svg';
import { StyledThemeToggler } from './ThemeToggler.styled';

const ThemeToggler = () => {
  return (
    <div>
      <StyledThemeToggler className="Off Onn">
        <svg
          width="21"
          height="21"
          aria-label="switch"
          className="OffToggler OnToggler"
        >
          <defs>
            <linearGradient id="grad1" gradientTransform="rotate(180)">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="100%" stopColor="#E8EAEA " />
            </linearGradient>
          </defs>
          <use href={icons + '#switch'}></use>
        </svg>
      </StyledThemeToggler>
    </div>
  );
};

export default ThemeToggler;
