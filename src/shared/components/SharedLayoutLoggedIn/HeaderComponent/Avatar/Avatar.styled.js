import styled from 'styled-components';

export const StyledAvatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;

  font-weight: 500;
  font-size: 20px;
  line-height: 1;
  color: var(--primary-font-color);
  border-radius: 50%;
  transition: all var(--transition-dur-func);

  background-color: ${props => {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < props.label.length; i += 1) {
      hash = props.label.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
  }};

  @media screen and (min-width: 768px) {
    width: 44px;
    height: 44px;
    font-size: 24px;
  }

  &:hover {
    scale: 1.01;
  }
`;

export const StyledAvatarImg = styled.img`
  border-radius: 50%;
`;
