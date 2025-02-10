import { useState } from 'react';

function useFormInput(initialValue = '') {
  const [value, setValue] = useState(initialValue);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return {
    value,
    onChange: handleChange
  };
}

export default useFormInput;
