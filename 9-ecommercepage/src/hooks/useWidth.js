import { useState, useEffect } from 'react';

export const useWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const size = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', size);
    return () => {
      window.removeEventListener('resize', size);
    };
  }, []);

  return { width };
};

export const sizeSelected = 890;
