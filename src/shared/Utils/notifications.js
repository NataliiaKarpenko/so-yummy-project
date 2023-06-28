import { toast } from 'react-toastify';

export const notificationError = () => {
  toast.error('Oops, something has gone wrong. Try again.', {
    toastId: 'notificationError',
  });
};

export const loginSuccess = () => {
  toast.success('Welcome to the "So Yummy App"', {
    toastId: 'loginSuccess',
  });
};

export const loginError = error => {
  if (error.message === 'Request failed with status code 403') {
    toast.error('Oops, email or password is wrong. Try again.', {
      toastId: 'loginError403',
    });
  } else {
    toast.error('Oops, something has gone wrong. Try again.', {
      toastId: 'loginError',
    });
  }
};

export const logoutSuccess = () => {
  toast.success('You have logged out successfully', {
    toastId: 'logoutSuccess',
  });
};

export const updateSuccess = () => {
  toast.success('You have updated your profile successfully', {
    toastId: 'updateSuccess',
  });
};

export const subscribeSuccess = () => {
  toast.success('You have subscribed to our news successfully', {
    toastId: 'subscribeSuccess',
  });
};

export const subscribeError = error => {
  if (error.message === 'Request failed with status code 400') {
    toast.error('Oops, verification has already been passed', {
      toastId: 'subscribeError400',
    });
  } else if (error.message === 'Request failed with status code 403') {
    toast.error('Oops, email  is wrong', {
      toastId: 'subscribeError403',
    });
  } else {
    toast.error('Oops, something has gone wrong. Try again.', {
      toastId: 'subscribeError',
    });
  }
};

export const addToShoppingListSuccess = () => {
  toast.success('The item has been added to your shopping-list. ', {
    toastId: 'addToShoppingListSuccess',
  });
};

export const removeFromShoppingListSuccess = () => {
  toast.info('The item has been removed from your shopping-list. ', {
    toastId: 'removeFromShoppingListInfo',
  });
};

export const addToFavorite = () => {
  toast.success('The recipe has been added to your list of favorites. ', {
    toastId: 'addToFavorite',
  });
};

export const removeFromFavorite = () => {
  toast.info('The recipe has been removed from your list of favorites. ', {
    toastId: 'removeFromFavorite',
  });
};
