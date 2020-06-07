import React from 'react';

export const useInput = (defaultValue = '') => {
  const [value, setValue] = React.useState(defaultValue);

  return {
    value,
    onChange: ({ target: { value } }) => setValue(value),
  }
};