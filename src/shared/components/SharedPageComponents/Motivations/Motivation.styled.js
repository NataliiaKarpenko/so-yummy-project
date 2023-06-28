import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
  width: 90vw;
  max-width: 355px;

  @media screen and (min-width: 768px) {
    width: 500px;
    max-width: 500px;
    height: 500px;
  }
`;

export const StyledImg = styled.img`
  border-radius: 30px;
`;

export const BubbleContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 35%;
  transform: translate(-50%);
  width: 220px;
  height: 200px;

  @media screen and (min-width: 768px) {
    width: 268px;
    height: 242px;
  }

  p {
    position: absolute;
    left: 50%;
    top: 10%;
    transform: translate(-50%);

    width: 190px;
    height: 110px;

    text-align: justify;
    font-size: 24px;
    font-weight: 600;
    line-height: 1.2;
    letter-spacing: -0.56px;
    color: var(--primary-font-color);

    @media screen and (min-width: 768px) {
      font-size: 28px;
      width: 216px;
      height: 120px;
    }

    span {
      color: var(--primary-btn-color);
    }
  }
`;
