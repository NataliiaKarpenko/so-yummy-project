import ReactPlayer from 'react-player/youtube';

import defaultImg from '../../../shared/images/noImage/noImage.png';
import {
  StyledDefaultImg,
  StyledImg,
  StyledItem,
  StyledItemText,
  StyledMarker,
  StyledTitle,
  StyledReactPlayer,
  StyledRecipePreparationContainer,
} from './RecipePreparation.styled';
import { nanoid } from 'nanoid';

const RecipePreparation = ({ instructions, youtube, previewImg, title }) => {
  const paragraphs = instructions
    .split('\r\n')
    .filter(sentence => sentence.trim() !== '');

  const modifyInstructions = string => {
    let newString;
    if (!isNaN(string.charAt(0)) && !isNaN(string.charAt(1))) {
      newString = string.slice(1);
    } else if (!isNaN(string.charAt(0))) {
      newString = string.slice(2);
    } else {
      newString = string;
    }
    return newString;
  };

  return (
    <StyledRecipePreparationContainer>
      <div>
        <StyledTitle>Recipe Preparation</StyledTitle>
        <ul>
          {paragraphs.map((item, index) => {
            const newItem = modifyInstructions(item);
            return (
              <StyledItem key={nanoid()}>
                <StyledMarker>{index + 1}</StyledMarker>
                <StyledItemText>{newItem}</StyledItemText>
              </StyledItem>
            );
          })}
        </ul>
      </div>
      {youtube && (
        <StyledReactPlayer>
          <ReactPlayer
            url={youtube}
            controls
            width="100%"
            height="100%"
            light={
              <img
                src={previewImg}
                alt={title}
                width={'100%'}
                height={'100%'}
              />
            }
          />
        </StyledReactPlayer>
      )}
      {!youtube && <StyledImg src={previewImg} alt={title} />}

      {!previewImg && !youtube && (
        <StyledDefaultImg src={defaultImg} alt="default" />
      )}
    </StyledRecipePreparationContainer>
  );
};

export default RecipePreparation;
