import { ErrorMessage, Field } from 'formik';
import styled from 'styled-components';

export const RecipeIngredientsContainer = styled.div`
  width: 100%;

  @media screen and (min-width: 1440px) {
    width: 609px;
  }
`;

export const CounterContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
  }
`;

export const CounterContainerTitle = styled.p`
  color: #3e4462;
  font-weight: 600;
  font-size: 24px;
  font-style: normal;
  line-height: 1;
  letter-spacing: -0.48px;

  @media screen and (min-width: 768px) {
    letter-spacing: -0.24px;
  }
`;

export const CounterBtnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 7px 14px;
  gap: 14px;
  width: 92px;
  height: 28px;
  border-radius: 18px;
  border: 1px solid rgba(51, 51, 51, 0.3);

  @media screen and (min-width: 768px) {
    padding: 8px 15px;
    gap: 20px;
    width: 110px;
    height: 32px;
  }
`;

export const CounterBtn = styled.button`
  border: none;
  outline: none;
  stroke: rgba(0, 0, 0, 0.5);
  background-color: transparent;
  transition: all var(--transition-dur-func);

  stroke: ${props =>
    props.disabled ? 'rgba(0, 0, 0, 0.1)' : 'rgba(0, 0, 0, 0.5)'};

  &:hover {
    scale: 1.01;
    stroke: ${props => (props.disabled ? '' : 'var(--primary-btn-color)')};
  }

  cursor: ${props => (props.disabled ? 'inherit' : 'pointer')};
`;

export const CounterIcon = styled.svg`
  width: 14px;
  height: 14px;

  @media screen and (min-width: 768px) {
    width: 16px;
    height: 16px;
  }
`;

export const CounterBtnText = styled.span`
  color: #333;
  font-family: Inter;
  font-size: 14px;
  line-height: 1.29;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`;

export const IngredientItemContainer = styled.li`
  display: flex;
  align-items: center;
  gap: 14px;
  height: 53px;

  &:not(:last-child) {
    margin-bottom: 18px;
  }

  @media screen and (min-width: 768px) {
    gap: 32px;
    height: 59px;

    &:not(:last-child) {
      margin-bottom: 24px;
    }
  }
`;

export const SelectContainer = styled.div`
  position: relative;
  width: 194px;
  height: 100%;
  background-color: rgba(217, 217, 217, 0.157);
  border-radius: 6px;

  @media screen and (min-width: 768px) {
    width: 398px;
  }
`;

export const customIngredientSelect = {
  option: (provided, state) => ({
    minHeight: '18px',
    paddingLeft: '18px',
    fontSize: '12px',
    lineHeight: 'normal',
    fontFamily: 'Poppins',
    letterSpacing: '-0.02em',
    cursor: 'pointer',
    backgroundColor: state.isFocused ? 'var(--secondary-background-color)' : '',
    color: state.isSelected
      ? 'var(--primary-btn-color)'
      : 'rgba(0, 0, 0, 0.5);',

    '&:not(:last-child)': {
      marginBottom: '6px',
    },

    '@media screen and (min-width: 768px)': {
      minHeight: '21px',
      fontSize: '14px',
    },

    '@media screen and (min-width: 1440px)': {
      minHeight: '24px',
    },
  }),

  control: () => ({
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    height: '53px',
    padding: '16px',
    backgroundColor: 'transparent',
    borderRadius: '6px',
    border: 'none',

    '@media screen and (min-width: 768px)': {
      height: '59px',
      paddingLeft: '18px',
    },

    '& .css-tj5bde-Svg': {
      position: 'absolute',
      right: '16px',
      top: '50%',
      transform: 'translateY(-50%)',
      width: '18px',
      height: '18px',
      fill: 'rgba(0, 0, 0, 0.5)',
      cursor: 'pointer',

      '@media screen and (min-width: 768px)': {
        right: '18px',
        width: '20px',
        height: '20px',
      },

      '&:hover': {
        fill: 'var(--primary-btn-color)',
        scale: '1.01',
      },
    },

    '& .css-1fdsijx-ValueContainer': {
      padding: 0,
    },

    '& .css-1xc3v61-indicatorContainer': {
      padding: '0',
    },
  }),

  placeholder: () => ({
    position: 'absolute',
    margin: '0',
    fontSize: '14px',
    fontWeight: '400',
    lineHeight: 'normal',
    letterSpacing: '-0.28px',
    color: 'rgba(0, 0, 0, 0.5)',

    '@media screen and (min-width: 768px)': {
      fontSize: '18px',
      letterSpacing: '-0.36px',
    },
  }),

  singleValue: () => ({
    position: 'absolute',
    fontSize: '14px',
    fontWeight: '400',
    lineHeight: 'normal',
    letterSpacing: '-0.28px',
    color: '#000000',

    '@media screen and (min-width: 768px)': {
      fontSize: '18px',
      letterSpacing: '-0.36px',
    },
  }),

  input: () => ({
    color: '#000',
    fontSize: '14px',
    fontWeight: '400',
    lineHeight: 'normal',
    letterSpacing: '-0.28px',

    '@media screen and (min-width: 768px)': {
      fontSize: '18px',
      letterSpacing: '-0.36px',
    },
  }),

  indicatorsContainer: () => ({
    padding: '0',
  }),

  menu: () => ({
    height: 'calc((6 * 18px) + (8px * 2) + (6px * 5))',
    paddingTop: '8px',
    paddingBottom: '8px',
    backgroundColor: 'var(--form-hover-state-color)',
    borderRadius: '6px',
    boxShadow: '0px 6.52px 7.8px rgba(0, 0, 0, 0.03)',
    overflowY: 'auto',
    overflowX: 'hidden',

    '@media screen and (min-width: 768px)': {
      height: 'calc((6 * 21px) + (8px * 2) + (6px * 5))',
    },

    '@media screen and (min-width: 1440px)': {
      height: 'calc((6 * 24px) + (8px * 2) + (6px * 5))',
    },
  }),

  menuList: provided => ({
    ...provided,
    maxHeight: '138px',
    scrollbarWidth: 'none',
    overflowY: 'scroll',
    msOverflowStyle: 'none',

    '@media screen and (min-width: 768px)': {
      maxHeight: '172px',
    },

    '&::-webkit-scrollbar': {
      width: '14px',
    },

    '&::-webkit-scrollbar-track': {
      background: 'transparent',
    },

    '&::-webkit-scrollbar-thumb': {
      height: '93px',
      backgroundColor: '#e7e5e5',
      borderRadius: '12px',
      border: '4px solid var(--form-hover-state-color)',
    },
  }),
};

export const ErrorContainer = styled(ErrorMessage)`
  position: absolute;
  left: 16px;
  bottom: -12px;

  color: var(--error-color);
  font-size: 12px;
  font-weight: 400;
  line-height: 1;
  letter-spacing: -0.24px;
`;

export const ErrorMessageOnSubmit = styled.div`
  position: absolute;
  left: 0;
  bottom: -12px;

  color: var(--error-color);
  font-size: 12px;
  font-weight: 400;
  line-height: 1;
  letter-spacing: -0.24px;
`;

export const AmountField = styled(Field)`
  width: 100%;
  height: 100%;
  padding-top: 16px;
  padding-bottom: 16px;
  border: none;
  outline: none;
  background-color: transparent;

  text-align: end;
  color: var(--secondary-font-color);
  font-size: 14px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.28px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    letter-spacing: -0.36px;
  }
`;

export const AmountItemContainer = styled.div`
  position: relative;
  padding-right: 12px;
  display: flex;

  align-items: center;

  gap: 2px;
  width: 90px;
  height: 100%;
  background-color: rgba(217, 217, 217, 0.157);
  border-radius: 6px;

  @media screen and (min-width: 768px) {
    width: 110px;
  }
`;

export const customAmountSelect = {
  option: (provided, state) => ({
    minHeight: '18px',
    paddingLeft: '28px',
    fontSize: '12px',
    lineHeight: 'normal',
    fontFamily: 'Poppins',
    letterSpacing: '-0.02em',
    cursor: 'pointer',
    backgroundColor: state.isFocused ? 'var(--secondary-background-color)' : '',
    color: state.isSelected
      ? 'var(--primary-btn-color)'
      : 'rgba(0, 0, 0, 0.5);',

    '&:not(:last-child)': {
      marginBottom: '6px',
    },

    '@media screen and (min-width: 768px)': {
      paddingLeft: '33px',
      minHeight: '21px',
      fontSize: '14px',
    },
  }),

  control: () => ({
    width: '50px',
    height: '53px',
    paddingBottom: '16px',
    paddingTop: '16px',
    backgroundColor: 'transparent',
    borderRadius: '6px',
    border: 'none',

    '@media screen and (min-width: 768px)': {
      height: '59px',
      width: '65px',
    },

    '& .css-tj5bde-Svg': {
      position: 'absolute',
      right: '-3px',
      top: '50%',
      transform: 'translateY(-50%)',

      width: '18px',
      height: '18px',
      fill: 'rgba(0, 0, 0, 0.5)',
      cursor: 'pointer',

      '@media screen and (min-width: 768px)': {
        height: '20px',
        width: '20px',
      },

      '&:hover': {
        fill: 'var(--primary-btn-color)',
        scale: '1.01',
      },
    },

    '& .css-1fdsijx-ValueContainer': {
      padding: 0,
      height: '100%',
    },

    ' & .css-gvq6ma-SingleValue': {
      width: '70%',
    },

    '& .css-1u9des2-indicatorSeparator': {
      display: 'none',
    },
  }),

  placeholder: () => ({
    display: 'none',
  }),

  singleValue: () => ({
    position: 'absolute',
    fontSize: '14px',
    fontWeight: '400',
    lineHeight: 'normal',
    letterSpacing: '-0.28px',
    color: '#000000',

    '@media screen and (min-width: 768px)': {
      fontSize: '18px',
      letterSpacing: '-0.36px',
    },
  }),

  menu: provided => ({
    ...provided,
    position: 'absolute',
    height: 'calc((6 * 18px) + (8px * 2) + (6px * 5))',
    width: '90px',
    right: '-12px',
    top: '45px',
    paddingTop: '8px',
    paddingBottom: '8px',
    backgroundColor: 'var(--form-hover-state-color)',
    borderRadius: '6px',
    boxShadow: '0px 6.52px 7.8px rgba(0, 0, 0, 0.03)',
    overflowY: 'auto',
    overflowX: 'hidden',

    '@media screen and (min-width: 768px)': {
      height: 'calc((6 * 21px) + (8px * 2) + (6px * 5))',
      width: '110px',
      top: '50px',
    },
  }),

  menuList: provided => ({
    ...provided,
    maxHeight: '138px',
    scrollbarWidth: 'none',
    overflowY: 'scroll',
    msOverflowStyle: 'none',

    '@media screen and (min-width: 768px)': {
      maxHeight: '172px',
    },

    '&::-webkit-scrollbar': {
      width: '14px',
    },

    '&::-webkit-scrollbar-track': {
      background: 'transparent',
    },

    '&::-webkit-scrollbar-thumb': {
      height: '93px',
      backgroundColor: '#e7e5e5',
      borderRadius: '12px',
      border: '4px solid var(--form-hover-state-color)',
    },
  }),
};
