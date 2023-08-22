import { useContext } from 'react';
import { createContext } from 'react';

export const formTest = createContext();
export const useForm = () => {
  const data = useContext(formTest);
  if (!data) throw new Error('out of Context');
  return data;
};
