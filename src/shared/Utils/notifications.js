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

export const refreshError = () => {
  toast.error('Oops, something has gone wrong. Log in again, please.', {
    toastId: 'refreshError',
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
    toast.error('Oops, email or password is wrong', {
      toastId: 'subscribeError403',
    });
  } else {
    toast.error('Oops, something has gone wrong. Try again.', {
      toastId: 'subscribeError',
    });
  }
};
