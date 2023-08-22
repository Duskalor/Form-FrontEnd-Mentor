import { useState } from 'react';
import { formTest } from '../hook/useForm';
import { validRegex } from '../utils/constantes';

export const FormProvider = ({ children }) => {
  const [error, setError] = useState(null);
  const [text, setText] = useState('duskalor1@gmail.com');
  const [valid, setValid] = useState(true);

  const HandleValidate = () => {
    if (text === '') return setError('email cant be blank');
    if (!text.match(validRegex)) return setError('Valid email required');
    setValid(false);
  };
  const handleText = (e) => {
    error && setError(null);
    setText(e.target.value);
  };
  return (
    <formTest.Provider
      value={{
        text,
        setText,
        valid,
        setValid,
        error,
        setError,
        handleText,
        HandleValidate,
      }}
    >
      {children}
    </formTest.Provider>
  );
};
