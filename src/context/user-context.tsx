import React, {
  useState,
  createContext,
  ReactElement,
  FC,
  Dispatch,
  ReactNode,
} from 'react';

import useLoginUser from '../hooks/useLoginHook';
import { IUser } from '../../src/utils/interface';

const DataContext = createContext({});

export type AuthenticationContextType = {
  user: IUser | null;
  setUser: Dispatch<IUser | null>;
};

interface Props {
  children: ReactNode;
}

export const AuthenticationContext =
  createContext<AuthenticationContextType | null>(null);
AuthenticationContext.displayName = 'AuthenticationContext';

export const DataProvider: FC<Props> = ({ children }) => {
  const [user, setUser] = useState<IUser>();
  console.log('user', user);
  const { mutateAsync: login } = useLoginUser();

  const onSubmit = async userLoginValues => {
    // console.log('user login values:', userLoginValues);
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
