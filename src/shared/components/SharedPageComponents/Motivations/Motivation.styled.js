import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  z-index: 999;
  width: 300px;
  height: 300px;

  @media screen and (min-width: 768px) {
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 999;
    width: 400px;
    height: 400px;
  }

  @media screen and (min-width: 1440px) {
    width: 500px;
    height: 500px;
  }
`;

export const BubbleContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 102px;
  transform: translate(-50%);
  width: 200px;
  height: 180px;

  @media screen and (min-width: 768px) {
    top: 134px;
    width: 268px;
    height: 242px;
  }

  @media screen and (min-width: 1440px) {
    top: 218px;
    width: 268px;
    height: 242px;
  }

  p {
    position: absolute;
    left: 50%;
    top: 22px;
    transform: translate(-50%);

    width: 164px;
    height: 96px;

    text-align: justify;
    font-size: 20px;
    font-weight: 600;
    line-height: 1.2;
    letter-spacing: -0.4px;
    color: ${props => props.theme.globalColors.light};

    @media screen and (min-width: 768px) {
      top: 45px;
      font-size: 28px;
      line-height: 1.07;
      width: 234px;
      height: 90px;
      letter-spacing: -0.56px;
    }

    @media screen and (min-width: 1440px) {
      top: 32px;

      width: 216px;
      height: 120px;
    }

    span {
      color: ${props => props.theme.globalColors.accentPrimary};
    }
  }
`;
