import React from 'react';

export const useModal = (defaultValue = '') => {
  const [value, setValue] = React.useState(defaultValue);

  return {
    value,
    closeModal: _ => setValue(''),
    onClick: event => setValue(event.target.name),
  }
}
