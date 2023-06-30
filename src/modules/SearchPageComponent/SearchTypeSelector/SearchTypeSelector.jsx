import { useState } from 'react';
import {
  CriteriaBox,
  Icon,
  SelectorContainer,
  SelectorItem,
  SelectorList,
  Selectorbox,
  StyledSearchTypeSelector,
} from './SearchTypeSelector.styled';
import icons from '../../../shared/sprite.svg';
import { capitalizeInitialLetter } from 'shared/Utils/capitalizeInitialLetter';
import { useEffect } from 'react';
import { useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import { nanoid } from 'nanoid';

const SearchTypeSelector = ({
  selectorType,

  handleSelectorType,
  selectorTypesValues,
}) => {
  const [showSelector, setShowSelector] = useState(false);
  const selectorRef = useRef();

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        setShowSelector(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [setShowSelector]);

  useEffect(() => {
    const handleClickOutside = e => {
      if (!selectorRef.current.contains(e.target)) {
        setShowSelector(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [setShowSelector]);

  const showSelectorToggler = () => {
    setShowSelector(!showSelector);
  };

  const clickSelectorType = string => {
    handleSelectorType(string);
    setShowSelector(false);
  };
  return (
    <StyledSearchTypeSelector ref={selectorRef}>
      <SelectorContainer>
        <CriteriaBox>Search by:</CriteriaBox>

        <Selectorbox onClick={showSelectorToggler}>
          <span>
            {selectorType ? capitalizeInitialLetter(selectorType) : 'Title'}
          </span>
          <Icon>
            <use href={icons + '#shevronUp'}></use>
          </Icon>
        </Selectorbox>
      </SelectorContainer>
      <CSSTransition
        in={showSelector}
        timeout={250}
        classNames="dropdown"
        unmountOnExit
      >
        <>
          {showSelector && (
            <SelectorList>
              {selectorTypesValues.map(value => (
                <SelectorItem
                  key={nanoid()}
                  onClick={() => clickSelectorType(value)}
                  className={value === selectorType ? 'active' : ''}
                >
                  {capitalizeInitialLetter(value)}
                </SelectorItem>
              ))}
            </SelectorList>
          )}
        </>
      </CSSTransition>
    </StyledSearchTypeSelector>
  );
};

export default SearchTypeSelector;
