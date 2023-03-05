/* eslint-disable prettier/prettier */
import React, { FC, ReactElement, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '~/layout/header.component';
import Footer from '~/layout/footer.component';
import { AuthenticatedApp } from './authenticatedApp';
import { UnauthenticatedApp } from './unathenticatedapp';
import { useForm } from 'react-hook-form';
// import * as auth from '../src/auth-provider';
import useLoginUser from './hooks/useLoginHook';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { userEvent } from '@storybook/testing-library';

const App: FC = (): ReactElement => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  // const [user, setUser] = React.useState(null);
  // const user = 'slawomir';
  // const { data: user, error } = useLoginUser();
  // const user = useLoginUser();
  // console.log(user);
  // console.log('User', user);
  // const queryClient = useQueryClient();
  const { isLoading, mutateAsync } = useLoginUser();
  // const queryClient = useQueryClient();
  // useEffect(() => {
  //   console.log('TEST!!', data);
  // }, [data]);
  // console.log('TEST!!', user);

  // const { mutate: user } = useMutation(useLoginUser, {
  //   // onSuccess: data => {
  //   //   console.log(data);
  //   //   const message = 'success';
  //   //   alert(message);
  //   // },
  // });
  // console.log('TEST!!', user);
  // const { handleSubmit } = useForm();
  // const onSubmit = handleSubmit(async userLoginValues => {
  //   console.log(userLoginValues);
  //   await mutateAsync({ ...userLoginValues });
  //   // navigate('/discover');
  //   // setIsLoggedIn(true);
  // });
  // const { data: user } = useLoginUser();
  // const { mutate: user } = useMutation(useLoginUser, {
  //   onSuccess: data => {
  //     console.log(data);
  //     const message = 'success';
  //     alert(message);
  //   },
  // });
  // console.log('Test', user);
  // debugger;
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      {/* <UnauthenticatedApp login={login} />

      <Router>
        <AuthenticatedApp user={user}  />
      </Router> */}
      {user ? (
        <Router>
          <AuthenticatedApp user={user} />
        </Router>
      ) : (
        <UnauthenticatedApp
          user={user}
          // setUser={setUser}
          // isLoggedIn={isLoggedIn}
          // setIsLoggedIn={setIsLoggedIn}
        />
      )}
      <Footer />
    </div>
  );
};

export default App;
