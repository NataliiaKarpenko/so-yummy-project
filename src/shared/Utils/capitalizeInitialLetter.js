export const capitalizeInitialLetter = string => {
  const newString = string.toLowerCase();

  let wordsArr = newString.split(' ');
  wordsArr[0] = wordsArr[0].charAt(0).toUpperCase() + wordsArr[0].slice(1);
  let capitalizedString = wordsArr.join(' ');
  return capitalizedString;
};
