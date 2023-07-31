import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import { nanoid } from 'nanoid';

import {
  CriteriaBox,
  Icon,
  SelectorContainer,
  SelectorItem,
  SelectorList,
  SelectorBox,
  StyledSearchTypeSelector,
} from './SearchTypeSelector.styled';
import icons from '../../../shared/sprite.svg';
import { capitalizeInitialLetter } from 'shared/Utils/capitalizeInitialLetter';

const SearchTypeSelector = ({
  selectorType,
  handleSelectorType,
  selectorTypesValues,
  hovered,
  setHovered,
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
    setHovered(string);
    setShowSelector(false);
  };
  return (
    <StyledSearchTypeSelector ref={selectorRef}>
      <SelectorContainer>
        <CriteriaBox>Search by:</CriteriaBox>

        <SelectorBox onClick={showSelectorToggler}>
          <span>
            {selectorType ? capitalizeInitialLetter(selectorType) : 'Title'}
          </span>
          <Icon>
            <use href={icons + '#shevronUp'}></use>
          </Icon>
        </SelectorBox>
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
              {selectorTypesValues.map(value => {
                const isHovered = hovered
                  ? value === hovered
                  : value === selectorType;

                const isActive = value === selectorType;
                return (
                  <SelectorItem
                    key={nanoid()}
                    className={`${isHovered ? 'hovered' : ''} ${
                      isActive ? 'active' : ''
                    }`}
                    onClick={() => clickSelectorType(value)}
                    onMouseEnter={() => setHovered(value)}
                    onMouseLeave={() => setHovered(null)}
                  >
                    {capitalizeInitialLetter(value)}
                  </SelectorItem>
                );
              })}
            </SelectorList>
          )}
        </>
      </CSSTransition>
    </StyledSearchTypeSelector>
  );
};

export default SearchTypeSelector;
