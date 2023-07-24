import { Field, useFormikContext } from 'formik';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';

import { getIngredientsList } from 'redux/reduxRecipes/recipesOperations';
import { selectIngredients } from 'redux/reduxRecipes/recipesSelectors';
import { StyledCloseBtn } from 'shared/components/SharedLayoutLoggedIn/CloseBtn/CloseBtn.styled';
import icons from '../../../../shared/sprite.svg';
import {
  AmountField,
  AmountItemContainer,
  CounterBtn,
  CounterBtnContainer,
  CounterContainer,
  CounterContainerTitle,
  CounterIcon,
  ErrorContainer,
  ErrorMessageOnSubmit,
  IngredientItemContainer,
  RecipeIngredientsContainer,
  SelectContainer,
  customAmountSelect,
  customIngredientSelect,
} from './RecipeIngredientsField.styled';

const RecipeIngredientsField = ({ counterValue, setCounterValue }) => {
  const { values, setFieldValue, setFieldTouched, touched } =
    useFormikContext();

  const dispatch = useDispatch();
  const ingredients = useSelector(selectIngredients);

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
                  console.log(updatedIngredients);
                  updatedIngredients[index].title = option ? option.value : '';
                  form.setFieldValue(
                    `ingredients[${index}].title`,
                    updatedIngredients[index].title
                  );
                  console.log(field);
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
          <span>{counterValue}</span>
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
