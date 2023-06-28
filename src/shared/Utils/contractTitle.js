export const contractTitle = string => {
  let newString = '';
  let arr = string.split(' ');
  let newArr = [];
  if (arr.length > 3) {
    newArr = arr.splice(0, 3);
    newString = `${newArr.join(' ')}...`;
  } else {
    newString = string;
  }
  return newString;
};

export const contractTitleMob = string => {
  let newString = '';
  let arr = string.split(' ');
  let newArr = [];
  if (arr.length > 2) {
    newArr = arr.splice(0, 2);
    newString = `${newArr.join(' ')}...`;
  } else {
    newString = string;
  }
  return newString;
};
