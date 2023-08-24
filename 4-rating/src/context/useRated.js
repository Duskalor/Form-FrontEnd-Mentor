import { useContext } from 'react';
import { createContext } from 'react';

export const rated = createContext();

export const useRated = () => {
  const data = useContext(rated);
  if (!data) throw new Error('Out of Context');
  return data;
};
