import { Field, useFormikContext } from 'formik';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';

import useTheme from 'shared/hooks/useTheme';
import { setTheme } from 'Styles/Theme';
import { getIngredientsList } from 'redux/reduxRecipes/recipesOperations';
import { selectIngredients } from 'redux/reduxRecipes/recipesSelectors';
import { StyledCloseBtn } from 'shared/components/SharedLayoutLoggedIn/CloseBtn/CloseBtn.styled';
import icons from '../../../../shared/sprite.svg';
import {
  AmountField,
  AmountItemContainer,
  CounterBtn,
  CounterBtnContainer,
  CounterBtnText,
  CounterContainer,
  CounterContainerTitle,
  CounterIcon,
  ErrorContainer,
  ErrorMessageOnSubmit,
  IngredientItemContainer,
  RecipeIngredientsContainer,
  SelectContainer,
} from './RecipeIngredientsField.styled';

const RecipeIngredientsField = ({ counterValue, setCounterValue }) => {
  const { values, setFieldValue, setFieldTouched, touched } =
    useFormikContext();
  const { isLight } = useTheme();
  const ingredients = useSelector(selectIngredients);
  const dispatch = useDispatch();
  const theme = setTheme(isLight);

  const preparedIngredients = ingredients.map(opt => {
    return {
      id: opt.id,
      value: opt.title,
      label: opt.title,
    };
  });

  const measureArr = [
    'g',
    'kg',
    'tbsp',
    'tsp',
    'pinch',
    'l',
    'ml',
    'lb',
    'oz',
    'item',
  ];

  const preparedMeasures = measureArr.map(opt => {
    return {
      value: opt,
      label: opt,
    };
  });

  const shouldShowErrorMessage =
    touched.ingredients?.length === 0 && values.ingredients?.length === 0;

  useEffect(() => {
    dispatch(getIngredientsList());
  }, [dispatch]);

  const clickIncrementBtnHandler = () => {
    setCounterValue(prevCounterValue => prevCounterValue + 1);

    setFieldValue('ingredients', [
      ...values.ingredients,
      { title: '', id: '', amount: '', unit: 'kg' },
    ]);
  };

  const clickDecrementBtnHandler = () => {
    setCounterValue(prevCounterValue => prevCounterValue - 1);

    setFieldTouched(`ingredients[${counterValue - 1}].title`, false);
    setFieldTouched(`ingredients[${counterValue - 1}].amount`, false);

    const newIngredients = [...values.ingredients];
    newIngredients.pop();
    setFieldValue('ingredients', newIngredients);
  };

  const closeBtnHandler = index => {
    const newIngredients = [...values.ingredients];
    newIngredients.splice(index, 1);
    setFieldValue('ingredients', newIngredients);
    setCounterValue(prevState => prevState - 1);
  };

  const customIngredientSelect = {
    option: (provided, state) => ({
      minHeight: '18px',
      paddingLeft: '18px',
      fontSize: '12px',
      lineHeight: 'normal',
      fontFamily: 'Poppins',
      letterSpacing: '-0.02em',
      cursor: 'pointer',
      backgroundColor: state.isFocused ? theme.select.hovered : '',
      color: state.isSelected ? theme.text.dropDownActive : theme.text.dropDown,

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
        fill: theme.text.input,
        cursor: 'pointer',

        '@media screen and (min-width: 768px)': {
          right: '18px',
          width: '20px',
          height: '20px',
        },

        '&:hover': {
          fill: theme.globalColors.accentPrimary,
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
      color: theme.text.inputPlaceholderAddRecipe,

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
      color: theme.text.textPrimary,

      '@media screen and (min-width: 768px)': {
        fontSize: '18px',
        letterSpacing: '-0.36px',
      },
    }),

    input: () => ({
      color: theme.text.input,
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
      backgroundColor: theme.select.dropDownBackground,
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
        backgroundColor: theme.select.scroll,
        borderRadius: '12px',
        border: `4px solid ${theme.select.dropDownBackground}`,
      },
    }),
    noOptionsMessage: () => ({
      textAlign: 'center',
      fontSize: '29px',
      color: theme.text.dropDownActive,
    }),
  };

  const customAmountSelect = {
    option: (provided, state) => ({
      ...provided,
      minHeight: '18px',
      paddingLeft: '28px',
      fontSize: '12px',
      lineHeight: 'normal',
      fontFamily: 'Poppins',
      letterSpacing: '-0.02em',
      cursor: 'pointer',
      backgroundColor: state.isFocused ? theme.select.hovered : '',
      color: state.isSelected ? theme.text.dropDownActive : theme.text.dropDown,

      '&:not(:last-child)': {
        marginBottom: '6px',
      },

      '@media screen and (min-width: 768px)': {
        paddingLeft: '33px',
        height: '21px',
        fontSize: '14px',
      },
    }),

    control: () => ({
      position: 'relative',
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
        fill: theme.text.input,
        cursor: 'pointer',

        '@media screen and (min-width: 768px)': {
          height: '20px',
          width: '20px',
        },

        '&:hover': {
          fill: theme.globalColors.accentPrimary,
          scale: '1.01',
        },
      },

      '&  .css-hlgwow': {
        position: 'relative',
      },

      '& .css-1fdsijx-ValueContainer': {
        padding: 0,
        height: '100%',
      },

      ' & .css-gvq6ma-SingleValue': {
        position: 'relative',
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
      color: theme.text.textPrimary,

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
      backgroundColor: theme.select.dropDownBackground,
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
        backgroundColor: theme.select.scroll,
        borderRadius: '12px',
        border: `4px solid ${theme.select.dropDownBackground}`,
      },
    }),
  };

  const renderIngredientFieldInputs = () => {
    return values.ingredients.map((ingredient, index) => (
      <IngredientItemContainer key={index}>
        <Field
          name={`ingredients[${index}].title`}
          component={({ field, form }) => (
            <SelectContainer>
              <Select
                styles={customIngredientSelect}
                options={preparedIngredients}
                value={preparedIngredients.find(
                  option => option.value === field.value
                )}
                onChange={option => {
                  const updatedIngredients = [...values.ingredients];

                  updatedIngredients[index].title = option ? option.value : '';
                  form.setFieldValue(
                    `ingredients[${index}].title`,
                    updatedIngredients[index].title
                  );

                  updatedIngredients[index].id = option ? option.id : '';
                  form.setFieldValue(
                    `ingredients[${index}].id`,
                    updatedIngredients[index].id
                  );
                }}
                onBlur={() => {
                  form.setFieldTouched(`ingredients[${index}].title`, true);
                  console.log(touched.ingredients);
                }}
                menuPosition={'fixed'}
                isSearchable
              />
              <ErrorContainer
                name={`ingredients[${index}].title`}
                component="div"
              />
            </SelectContainer>
          )}
        />

        <AmountItemContainer>
          <AmountField
            name={`ingredients[${index}].amount`}
            type="text"
            autoFocus={true}
            value={ingredient.amount}
          />
          <ErrorContainer
            name={`ingredients[${index}].amount`}
            component="div"
          />

          <Field
            name={`ingredients[${index}].unit`}
            component={({ field, form }) => (
              <Select
                styles={customAmountSelect}
                options={preparedMeasures}
                value={preparedMeasures.find(
                  option => option.value === field.value
                )}
                onChange={option => {
                  console.log(option.value);
                  setFieldValue(field.name, option.value);
                }}
                onBlur={field.onBlur}
                isSearchable={false}
              />
            )}
          />
        </AmountItemContainer>

        <StyledCloseBtn
          type="button"
          ingredientFieldBtn={true}
          onClick={() => {
            console.log(index);
            closeBtnHandler(index);
          }}
        >
          <svg aria-label="close">
            <use href={icons + '#close'}></use>
          </svg>
        </StyledCloseBtn>
      </IngredientItemContainer>
    ));
  };

  return (
    <RecipeIngredientsContainer>
      <CounterContainer>
        <CounterContainerTitle>Ingredients</CounterContainerTitle>

        {shouldShowErrorMessage && (
          <ErrorMessageOnSubmit>
            {'At least one ingredient is required'}
          </ErrorMessageOnSubmit>
        )}
        <CounterBtnContainer>
          <CounterBtn
            type="button"
            onClick={clickDecrementBtnHandler}
            disabled={counterValue === 0 ? true : false}
          >
            <CounterIcon>
              <use href={icons + '#minus'}></use>
            </CounterIcon>
          </CounterBtn>
          <CounterBtnText>{counterValue}</CounterBtnText>
          <CounterBtn type="button" onClick={clickIncrementBtnHandler}>
            <CounterIcon>
              <use href={icons + '#plus'}></use>
            </CounterIcon>
          </CounterBtn>
        </CounterBtnContainer>
      </CounterContainer>
      <ul>{renderIngredientFieldInputs()}</ul>
    </RecipeIngredientsContainer>
  );
};
export default RecipeIngredientsField;
