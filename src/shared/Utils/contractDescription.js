export const contractDescription = string => {
  let newString = '';
  let arr = string.split('');
  let newArr = [];
  if (arr.length > 300) {
    newArr = arr.splice(0, 300);
    newString = `${newArr.join('')}...`;
  } else {
    newString = string;
  }
  return newString;
};

export const contractDescriptionMob = string => {
  let newString = '';
  let arr = string.split('');
  let newArr = [];
  if (arr.length > 150) {
    newArr = arr.splice(0, 150);
    newString = `${newArr.join('')}...`;
  } else {
    newString = string;
  }
  return newString;
};
