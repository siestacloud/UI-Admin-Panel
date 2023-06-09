import { useState, useEffect } from 'react';

export const useScroll = ():[boolean] => {
  const [value, setValue] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setValue(true);
      } else {
        setValue(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])
  return [value];
}
