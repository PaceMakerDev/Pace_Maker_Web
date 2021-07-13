import React, { useCallback, useState } from 'react';

export const useInput = <T = string>(
  initState: T
): [T, React.ChangeEventHandler<HTMLInputElement>, React.Dispatch<React.SetStateAction<T>>] => {
  const [state, setState] = useState<T>(initState);

  const handleInput: React.ChangeEventHandler<HTMLInputElement> = useCallback(event => {
    const { value }: any = event.target;
    setState(value);
  }, []);

  return [state, handleInput, setState];
};

export const useNumberInput = (
  initState?: number
): [string, React.ChangeEventHandler<HTMLInputElement>, React.Dispatch<React.SetStateAction<string>>] => {
  const [state, setState] = useState(initState ? initState.toString() : '');

  const handleInput: React.ChangeEventHandler<HTMLInputElement> = useCallback(event => {
    const { value } = event.target;
    setState(value.replace(/[^0-9]/g, ''));
  }, []);

  return [state, handleInput, setState];
};

export const useCheckInput = (
  initState: boolean
): [boolean, React.ChangeEventHandler<HTMLInputElement>, React.Dispatch<React.SetStateAction<boolean>>] => {
  const [state, setState] = useState(initState);

  const handleInput: React.ChangeEventHandler<HTMLInputElement> = useCallback(event => {
    const { checked } = event.target;
    setState(checked);
  }, []);

  return [state, handleInput, setState];
};
