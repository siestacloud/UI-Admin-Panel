import { useState, useCallback } from 'react';

export const useToggle = (i: boolean): [boolean, () => void] => {
  const [value, setValue] = useState(i);

  const toggle = useCallback(() => {
    setValue(v => !v);
  }, []);

  return [value, toggle];
}
