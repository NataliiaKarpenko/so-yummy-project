import styled from 'styled-components';

export const StyledUserInfoContainer = styled.div`
  position: relative;
`;

export const StyledUserInfo = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: 14px;

  font-weight: 600;
  font-size: 14px;
  line-height: 1.7;

  color: var(--secondary-btn-color);
  transition: all var(--transition-dur-func);
  cursor: pointer;

  &:hover {
    color: var(--primary-btn-color);
    scale: 1.01;
  }
`;
