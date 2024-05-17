// Notification.js

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SHORT_DURATION = 2000; // Set the duration in milliseconds (e.g., 3000ms or 3 seconds)

const successNotification = (message) => {
  toast.success(message, {
    position: toast.POSITION.TOP_CENTER,
    autoClose: SHORT_DURATION,
  });
};

const errorNotification = (message) => {
  toast.error(message, {
    position: toast.POSITION.TOP_LEFT,
    autoClose: SHORT_DURATION,
  });
};

const warningNotification = (message) => {
  toast.warn(message, {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: SHORT_DURATION,
  });
};

const infoNotification = (message) => {
  toast.info(message, {
    position: toast.POSITION.BOTTOM_CENTER,
    autoClose: SHORT_DURATION,
  });
};

const customNotification = (message, className) => {
  toast(message, {
    position: toast.POSITION.BOTTOM_RIGHT,
    className: className || 'foo-bar',
    autoClose: SHORT_DURATION,
  });
};

const err = (message) => {
  toast.error(message, {
    position: toast.POSITION.BOTTOM_CENTER,
    autoClose: SHORT_DURATION,
  });
};

export {
  successNotification,
  errorNotification,
  warningNotification,
  infoNotification,
  customNotification,
};
