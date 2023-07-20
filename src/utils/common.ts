import {Flip, toast, TypeOptions} from 'react-toastify';

export const capitalizeFirstLetter = (str: string): string => str[0].toUpperCase() + str.slice(1);

export const formatTime = (time: string): string => {
  const [hours, minutes] = time.split(':');

  return `${hours}h${minutes}m`;
};

export const getDateAndTime = (str: string): [string, string] => {
  const pattern = /(today|tomorrow)(\d{2}h\d{2}m)/;
  const match = str.match(pattern);

  if (match) {
    const time = match[2].replace('m', '').replace('h', ':');

    return [match[1], time];
  }

  return ['error', 'error'];
};

export const showToast = (message: string, type: TypeOptions): void => {
  toast(message, {
    transition: Flip,
    theme: 'dark',
    type: type
  });
};
