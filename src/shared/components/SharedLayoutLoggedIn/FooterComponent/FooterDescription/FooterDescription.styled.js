import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledFooterDescription = styled.div`
  @media screen and (max-width: 767px) {
    display: flex;
    justify-content: center;
  }

  @media screen and (min-width: 1440px) {
    width: 418px;
  }
`;

export const StyledLogoContainer = styled(NavLink)`
  margin-bottom: 32px;
  display: flex;
  align-items: center;
  gap: 8px;

  transition: all var(--transition-dur-func);

  @media screen and(max-width: 767px) {
    justify-content: center;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 24px;
    gap: 12px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 40px;
  }

  p {
    font-weight: 700;
    font-size: 18px;
    line-height: 1;
    letter-spacing: 0.015em;
    color: var(--primary-font-color);

    @media screen and (min-width: 768px) {
      font-size: 28px;
    }
  }

  &:hover {
    transform: scale(1.01);
  }

  &:hover p {
    color: var(--primary-btn-color);
    transform: scale(1.01);
  }

  &:hover svg {
    fill: var(--primary-btn-color);
    stroke: var(--secondary-background-color);
    transform: scale(1.01);
  }
`;

export const StyledFooterDescriptionList = styled.ul`
  padding-left: 22px;
  list-style: disc;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.02em;
  color: var(--primary-font-color);

  @media screen and (min-width: 1449px) {
    padding-left: 25px;
    font-size: 18px;
    line-height: 1.33;
    color: var(--primary-font-color);
  }

  @media screen and (max-width: 767px) {
    display: none;
  }

  li:not(:last-child) {
    margin-bottom: 10px;

    @media screen and (min-width: 1440px) {
      margin-bottom: 12px;
    }
  }
`;
