import React from 'react';
import styled from '@emotion/styled';
// import { Modal } from 'daisyui/modal';
import { FaSpinner } from 'react-icons/fa';
import { keyframes } from '@emotion/react';
import { jsx } from '@emotion/react';

const ButtonsVariant = {
  primary: {
    backgroundColor: '#87CEEB',
    color: '#5A5A5A',
  },
  secondary: {
    backgroundColor: '#F5E216',
    color: 'black',
  },
};

const Button = styled.button(
  {
    padding: '10px 15px',
    border: '0',
    lineHeight: '1',
    borderRadius: '3px',
  },
  ({ variant = 'primary' }) => ButtonsVariant[variant],
);

const Input = styled.input({
  borderRadius: '3px',
  border: '1px solid #f1f1f4',
  background: '#f1f2f7',
  padding: '8px 12px',
});

const CircleButton = styled.button({
  borderRadius: '30px',
  padding: '0',
  width: '40px',
  height: '40px',
  lineHeight: '1',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: '#FFCCCB',
  color: '#434449',
  border: `1px solid #f1f1f4`,
  cursor: 'pointer',
});

const DialogComponent = () => {
  return (
    <div>
      <input className="modal-toggle" id="my-modal" type="checkbox" />
      <div className="modal">
        <div className="modal-box bg-blue-700">
          <h3 className="text-lg font-bold ">
            Congratulations random Internet user!
          </h3>
          <p className="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
          <div className="modal-action">
            <label className="btn" htmlFor="my-modal">
              Close
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

const Dialog = styled(DialogComponent)({
  maxWidth: '450px',
  borderRadius: '3px',
  paddingBottom: '3.5em',
  boxShadow: '0 10px 30px -5px rgba(0, 0, 0, 0.2)',
  margin: '20vh auto',
  // '@media (max-width: 991px)': {
  //   width: '100%',
  //   margin: '10vh auto',
  // },
});

const FormGroup = styled.div({
  display: 'flex',
  flexDirection: 'column',
});

const spin = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' },
});

const Spinner = styled(FaSpinner)({
  animation: `${spin} 1s linear infinite`,
});
Spinner.defaultProps = {
  'aria-label': 'loading',
};

function FullPageSpinner() {
  return (
    <div
      style={{
        fontSize: '4em',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Spinner />
    </div>
  );
}

const BookListUL = styled.ul({
  listStyle: 'none',
  padding: '0',
  display: 'grid',
  gridTemplateRows: 'repeat(auto-fill, minmax(100px, 1fr))',
  gridGap: '1em',
});

export {
  Button,
  Input,
  CircleButton,
  Dialog,
  FormGroup,
  FullPageSpinner,
  BookListUL,
  Spinner,
};
