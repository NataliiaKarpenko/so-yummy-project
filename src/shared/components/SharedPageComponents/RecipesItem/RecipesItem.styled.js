import styled from 'styled-components';

export const StyledRecipesItem = styled.li`
  position: relative;
  width: 100%;
  height: 323px;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    flex-basis: calc((100% - 32px) / 2);
  }

  @media screen and (min-width: 1440px) {
    flex-basis: calc((100% - 42px) / 4);
  }

  &:not(:last-child) {
    @media screen and (max-width: 767px) {
      margin-bottom: ${props =>
        props.marginBottom === '28px' ? '28px' : '0px'};
    }
  }

  &::before {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 2;
    display: block;
    content: '';
    width: 0;
    height: 0;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 100%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    opacity: 0;
  }

  &:hover::before {
    -webkit-animation: circle 0.75s;
    animation: circle 0.75s;
  }

  @-webkit-keyframes circle {
    0% {
      opacity: 1;
    }
    40% {
      opacity: 1;
    }
    100% {
      width: 200%;
      height: 200%;
      opacity: 0;
    }
  }
  @keyframes circle {
    0% {
      opacity: 1;
    }
    40% {
      opacity: 1;
    }
    100% {
      width: 200%;
      height: 200%;
      opacity: 0;
    }
  }

  &:hover p,
  &:focus p {
    transform: translateX(-50%) scale(1.05);
  }
`;

export const StyledRecipesImg = styled.img`
  height: 100%;
  border-radius: 8px;
  object-fit: cover;
`;

export const StyledRecipesTitle = styled.p`
  position: absolute;
  bottom: 26px;
  left: 50%;
  transform: translateX(-50%) scale(1);
  padding: 16px;
  width: 307px;
  background-color: #ffffff;
  border-radius: 8px;

  transition: all var(--transition-dur-func);

  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  letter-spacing: -0.24px;
  color: #3e4462;

  @media screen and (min-width: 768px) {
    width: 300px;
  }

  @media screen and (min-width: 1440px) {
    bottom: 23px;
    width: 268px;
  }
`;

export const StyledLikeBtn = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  border: none;
  background: transparent;
`;

export const StyledLikeIcon = styled.svg`
  width: 40px;
  height: 40px;
  stroke: red;
  stroke-width: 2px;
  fill: ${props => (props.favorite === true ? 'red' : 'transparent')};
  transition: all var(--transition-dur-func);

  &:hover {
    scale: 1.03;
  }
`;
