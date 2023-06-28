import styled from 'styled-components';

export const StyledRecipePreparationContainer = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 767px) {
    gap: 40px;
  }

  @media screen and (min-width: 768px) {
    margin-top: 96px;
    gap: 50px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 100px;
    flex-direction: row;
  }
`;

export const StyledTitle = styled.p`
  margin-bottom: 28px;

  font-weight: 600;
  font-size: 24px;
  line-height: 1;
  letter-spacing: -0.24px;
  color: #3e4462;

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
  }
`;

export const StyledItem = styled.li`
  display: flex;
  gap: 14px;

  &:not(:last-child) {
    margin-bottom: 18px;
  }
`;

export const StyledMarker = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 21px;
  height: 21px;
  border-radius: 50%;
  background-color: var(--primary-btn-color);

  font-weight: 600;
  font-size: 14px;
  line-height: 1.5;
  color: #ffffff;
`;

export const StyledItemText = styled.span`
  text-align: justify;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.02em;
  color: rgba(0, 0, 0, 0.8);
`;

export const StyledDefaultImg = styled.img`
  height: 250px;
  object-fit: contain;
  border-radius: 8px;

  @media screen and (max-width: 374px) {
    max-width: 343px;
    width: 100%;
  }

  @media screen and (min-width: 375px) {
    width: 343px;
  }

  @media screen and (min-width: 768px) {
    min-width: 433px;
    height: 332px;
  }
`;

export const StyledImg = styled.img`
  width: 343px;
  height: 250px;
  object-fit: cover;
  border-radius: 8px;

  @media screen and (max-width: 374px) {
    max-width: 343px;
    width: 100%;
  }

  @media screen and (min-width: 375px) {
    width: 343px;
  }

  @media screen and (min-width: 768px) {
    min-width: 433px;
    height: 332px;
  }
`;

export const StyledReactPlayer = styled.div`
  width: 343px;
  height: 250px;
  border-radius: 8px;
  overflow: hidden;

  @media screen and (max-width: 374px) {
    max-width: 343px;
    width: 100%;
  }

  @media screen and (min-width: 375px) {
    width: 343px;
  }

  @media screen and (min-width: 768px) {
    min-width: 433px;
    height: 332px;
  }
`;
