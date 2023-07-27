import { useFormikContext } from 'formik';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getCategoriesList } from 'redux/reduxRecipes/recipesOperations';
import { selectCategories } from 'redux/reduxRecipes/recipesSelectors';
import {
  AddDishPhotoContainer,
  AddDishPhotoField,
  AddPhotoImage,
  DescriptionContainer,
  DescriptionField,
  DescriptionItem,
  ErrorContainer,
} from './RecipeDescriptionField.styled';
import RecipeDescriptionSelect from './RecipeDescriptionSelect/RecipeDescriptionSelect';
import CloseBtn from 'shared/components/SharedLayoutLoggedIn/CloseBtn/CloseBtn';

const RecipeDescriptionField = ({ setDishPhotoURL, dishPhotoURL }) => {
  const { touched, setFieldValue, errors } = useFormikContext();

  const dispatch = useDispatch();
  const categoriesList = useSelector(selectCategories);

  const maxTime = 120;

  useEffect(() => {
    dispatch(getCategoriesList());
  }, [dispatch]);

  const getTimeOptions = value => {
    const timeOptionsArr = [];
    for (let i = 5; i <= value; i += 5) {
      timeOptionsArr.push(`${i} min`);
    }

    return timeOptionsArr;
  };

  const handleAddDishPhotoContainerClick = () => {
    document.getElementById('myDishPhoto').click();
  };

  const closeBtnHandler = event => {
    event.stopPropagation();
    setDishPhotoURL('');
  };

  return (
    <DescriptionContainer>
      <AddDishPhotoContainer onClick={handleAddDishPhotoContainerClick}>
        {dishPhotoURL && <AddPhotoImage src={dishPhotoURL} alt="dish" />}
        {dishPhotoURL && (
          <CloseBtn
            deleteDishPhotoBtn={true}
            closeBtnHandler={closeBtnHandler}
          />
        )}

        <AddDishPhotoField
          name="fullImage"
          type="file"
          id="myDishPhoto"
          value={''}
          style={{ display: 'none' }}
          accept={'image/jpeg,image/png,image/gif'}
          onChange={event => {
            const file = event.currentTarget.files[0];

            setDishPhotoURL(URL.createObjectURL(file));
            setFieldValue('fullImage', file);
          }}
        />

        <ErrorContainer name="fullImage" component="div" />
      </AddDishPhotoContainer>
      <ul>
        <DescriptionItem isError={touched.title && errors.title}>
          <DescriptionField
            type="text"
            name="title"
            placeholder="Enter recipe title"
          />
          <ErrorContainer name="title" component="div" />
        </DescriptionItem>

        <DescriptionItem isError={touched.description && errors.description}>
          <DescriptionField
            type="text"
            name="description"
            placeholder="Enter recipe description"
          />
          <ErrorContainer name="description" component="div" />
        </DescriptionItem>

        <DescriptionItem>
          <RecipeDescriptionSelect
            name="category"
            optionArr={categoriesList}
            defaultText="Select..."
            placeholderText="Category"
          />
        </DescriptionItem>

        <DescriptionItem>
          <RecipeDescriptionSelect
            name="time"
            optionArr={getTimeOptions(maxTime)}
            defaultText="Select..."
            placeholderText="Cooking time"
          />
        </DescriptionItem>
      </ul>
    </DescriptionContainer>
  );
};

export default RecipeDescriptionField;
