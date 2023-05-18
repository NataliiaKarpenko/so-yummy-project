import styled from 'styled-components';

export const StyledBackdrop = styled.div`
  &.backdrop-enter {
    transform: scale(0);
    opacity: 0;
  }

  &.backdrop-enter-active {
    transform: scale(1);

    opacity: 1;
    transition: all var(--transition-dur-func);
  }
  &.backdrop-exit {
    transform: scale(1);
    opacity: 1;
  }

  &.backdrop-exit-active {
    transform: scale(0);
    opacity: 0;
    transition: all var(--transition-dur-func);
  }

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 998;

  background-color: rgba(0, 0, 0, 0.2);
  overflow-y: scroll;
`;
