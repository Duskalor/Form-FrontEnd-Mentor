import { useState } from 'react';
import { rated } from './useRated';

export const RatedContext = ({ children }) => {
  const [actions, setActions] = useState({
    active: null,
    selected: null,
  });

  const handleActions = (num) => {
    setActions(num);
  };

  return (
    <rated.Provider
      value={{
        active: actions.active,
        selected: actions.selected,
        handleActions,
      }}
    >
      {children}
    </rated.Provider>
  );
};
