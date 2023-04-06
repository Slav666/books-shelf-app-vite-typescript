import React, { useState, createContext } from 'react';
import useLoginUser from '../hooks/useLoginHook';

const DataContext = createContext({});

export const DataProvider = ({ children }: any) => {
  const [user, setUser] = useState();
  const { mutateAsync: login } = useLoginUser();

  const onSubmit = async userLoginValues => {
    const response = await login({ ...userLoginValues });
    setUser(response);
  };

  return (
    <DataContext.Provider value={{ user, setUser, onSubmit }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
