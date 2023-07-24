import { useState, useEffect, useRef } from 'react';
import { useFormikContext } from 'formik';

import icons from '../../../../../shared/sprite.svg';
import AddRecipeDropDown from '../../AddRecipeDropDown/AddRecipeDropDown';
import {
  ChosenOptionBox,
  DescriptionField,
  SelectIcon,
} from './RecipeDescriptionSelect.styled';

const RecipeDescriptionSelect = ({
  name,
  optionArr,
  defaultText,
  placeholderText,
}) => {
  const selectorRef = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const [option, setOption] = useState('');
  const [hoveredOption, setHoveredOption] = useState(null);
  const { values, errors, setFieldTouched, touched } = useFormikContext();

  const isError = touched[name] && errors[name] && !isOpen ? true : false;

  useEffect(() => {
    const handleClickOutside = e => {
      if (!selectorRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [setIsOpen]);

  const toggleIsOpen = e => {
    setIsOpen(!isOpen);
    setFieldTouched(name, true);
    if (!values[name]) {
      setHoveredOption(optionArr[0]);
    } else {
      setHoveredOption(option);
    }
  };

  return (
    <DescriptionField isError={isError} ref={selectorRef}>
      <p>{placeholderText}</p>
      <div>
        <ChosenOptionBox onClick={toggleIsOpen}>
          <span>{values[name] ? `${option}` : defaultText}</span>
          <SelectIcon>
            <use href={icons + '#shevronUp'}></use>
          </SelectIcon>
        </ChosenOptionBox>
        <AddRecipeDropDown
          name={name}
          optionArr={optionArr}
          setOption={setOption}
          option={option}
          setIsOpen={setIsOpen}
          isOpen={isOpen}
          isError={isError}
          errors={errors[name]}
          hoveredOption={hoveredOption}
          setHoveredOption={setHoveredOption}
        />
      </div>
    </DescriptionField>
  );
};

export default RecipeDescriptionSelect;
