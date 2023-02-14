/* eslint-disable prettier/prettier */
import React, { FC, ReactElement } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import SinglePostPage from './components/SinglePost';
import Header from '~/layout/header.component';
import Footer from '~/layout/footer.component';
import PostList from './components/PostList';
import CreatePost from './components/CreatePost';
import UpdatePost from './components/UpdatePost';
import { Logo } from './components/bookshelf/logo';
import { DiscoverBooksScreen } from './components/bookshelf/discover';
import {
  Dialog,
  Button,
  CircleButton,
} from '../src/components/bookshelf/reusableComponents';
import {
  Modal,
  ModalOpenButton,
  ModalContents,
} from '../src/components/bookshelf/modal';
import LoginForm from '../src/components/bookshelf/login-register-form';
// import { BookRow } from './components/bookshelf/bookrow';

const App: FC = (): ReactElement => {
  function login(formData) {
    console.log('login', formData);
  }

  function register(formData) {
    console.log('register', formData);
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100vh',
        }}
      >
        <Logo width="80" height="80" />
        <h1>Bookshelf</h1>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
            gridGap: '0.75rem',
          }}
        >
          <Modal>
            <ModalOpenButton>
              <label htmlFor="my-modal" className="btn">
                Login
              </label>
            </ModalOpenButton>
            <ModalContents aria-label="Login form" title="Login">
              <LoginForm
                submitButton={<Button variant="primary">Login</Button>}
                onSubmit={login}
              />
            </ModalContents>
          </Modal>
          <Modal>
            <ModalOpenButton>
              <label htmlFor="my-modal" className="btn">
                Register
              </label>
            </ModalOpenButton>
            <ModalContents aria-label="Registration form" title="Register">
              <LoginForm
                submitButton={<Button variant="secondary">Register</Button>}
                onSubmit={register}
              />
            </ModalContents>
          </Modal>
        </div>
      </div>
      <main className="grow">
        {/* <Router> */}
        {/* <nav className="m-2 flex justify-center">
            <Link
              className="m-2 rounded-md bg-sky-500 p-2 hover:bg-sky-800"
              to="/"
            >
              Home
            </Link>
            <Link
              className="m-2 rounded-md bg-sky-500 p-2 hover:bg-sky-800"
              to="/createPost"
            >
              Create New Post
            </Link>
          </nav> */}
        {/* <Routes> */}
        {/* <Route element */}
        {/* <Route element={<PostList />} path="/" /> */}
        {/* <Route element={<SinglePostPage />} path="/posts/:id" />
            <Route element={<UpdatePost />} path="updatePost/:id" />
            <Route element={<CreatePost />} path="createPost/" />
            <Route element={<DiscoverBooksScreen />} path="/books/:title" /> */}
        {/* </Routes> */}
        {/* </Router> */}
        <DiscoverBooksScreen />
      </main>
      {/* <Dialog />
      <label htmlFor="my-modal" className="btn">
        open modal
      </label> */}
      <Footer />
    </div>
  );
};

export default App;
