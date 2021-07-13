import React, { useCallback, useRef } from 'react';

export const useShakeAnimation = (): [React.RefObject<any>, () => void] => {
  const ref = useRef<any>(null);

  const handleClick = useCallback(() => {
    const { current } = ref;
    if (current) {
      current.onanimationend = () => current.classList.remove('shake-animation');
      current.classList.add('shake-animation');
    }
  }, [ref]);

  return [ref, handleClick];
};
