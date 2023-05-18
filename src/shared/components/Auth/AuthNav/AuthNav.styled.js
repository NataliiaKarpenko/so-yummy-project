import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledAuthNav = styled(Link)`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.5;
  color: var(--primary-font-color);
  text-decoration: underline;
  transition: all var(--transition-dur-func);

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }

  &:hover {
    scale: 1.05;
  }
`;
