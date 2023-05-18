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
  transition: all var(--transition-dur-func);

  border-radius: 50%;
  background-color: #d9d9d9;
  background-color: ${props => {
    let hash = 0;
    for (let i = 0; i < props.label.length; i++) {
      hash = props.label.charCodeAt(i) + ((hash << 5) - hash);
    }
    let color = '#';
    for (let i = 0; i < 3; i++) {
      const value = (hash >> (i * 8)) & 0xff;
      color += ('00' + value.toString(16)).slice(-2);
    }
    return color;
  }};

  @media screen and (min-width: 768px) {
    width: 44px;
    height: 44px;
    font-size: 24px;
  }

  &:hover {
    scale: 1.05;
  }
`;
