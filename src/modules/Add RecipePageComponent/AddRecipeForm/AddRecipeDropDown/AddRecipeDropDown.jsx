import { useFormikContext } from 'formik';
import { CSSTransition } from 'react-transition-group';
import { nanoid } from 'nanoid';
import { useEffect } from 'react';

import {
  DropDownBox,
  DropDownItem,
  ErrorContainer,
} from './AddRecipeDropDown.styled';

const AddRecipeDropDown = ({
  name,
  errors,
  optionArr,
  setOption,
  option,
  setIsOpen,
  isOpen,
  isError,
  hoveredOption,
  setHoveredOption,
}) => {
  const { values, setFieldValue } = useFormikContext();

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [setIsOpen]);

  const optionClickHandler = string => {
    setOption(string);
    setIsOpen(false);
    setFieldValue(name, string);
  };

  return (
    <div>
      <CSSTransition
        in={isOpen}
        timeout={250}
        classNames="dropdown"
        unmountOnExit
      >
        <>
          {isOpen && (
            <DropDownBox as="ul" name={name}>
              {optionArr.map(opt => {
                const isActive =
                  (opt.title === option && values[name]) ||
                  (opt === option && values[name]);
                const isHovered =
                  opt.title === hoveredOption || opt === hoveredOption;
                return (
                  <DropDownItem
                    key={opt.id ? opt.id : nanoid()}
                    value={opt.title ? opt.title : opt}
                    selected={opt.title === option}
                    className={`${isHovered ? 'hovered' : ''} ${
                      isActive ? 'active' : ''
                    }`}
                    onClick={() => {
                      optionClickHandler(opt.title ? opt.title : opt);
                    }}
                    onMouseEnter={() =>
                      setHoveredOption(opt.title ? opt.title : opt)
                    }
                    onMouseLeave={() => setHoveredOption(null)}
                  >
                    {opt.title ? opt.title : opt}
                  </DropDownItem>
                );
              })}
            </DropDownBox>
          )}
        </>
      </CSSTransition>
      {isError && <ErrorContainer>{errors}</ErrorContainer>}
    </div>
  );
};

export default AddRecipeDropDown;
