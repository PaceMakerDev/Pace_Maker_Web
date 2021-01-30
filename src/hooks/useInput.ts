import { useState } from 'react';

export const useInput = <T>(initState: T): [T, (event: React.ChangeEvent<HTMLInputElement>) => void, () => void] => {
  const [inputs, setInputs] = useState(initState);

  const handleInputs = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setInputs({ ...inputs, [name]: value });
  };

  const resetInputs = () => {
    setInputs(initState);
  };

  return [inputs, handleInputs, resetInputs];
};
