import { jsx } from '@emotion/react';
import { defaultContext } from 'msw';
import React, {
  createContext,
  useState,
  useContext,
  cloneElement,
} from 'react';
import { CircleButton } from './reusableComponents';
import { Dialog } from './reusableComponents';

export const callAll =
  (...fns) =>
  (...args) =>
    fns.forEach(fn => fn && fn(...args));
const ModalContext = createContext();

export function Modal(props) {
  const [isOpen, setIsOpen] = useState(false);

  return <ModalContext.Provider value={[isOpen, setIsOpen]} {...props} />;
}

export function ModalOpenButton({ children: child }) {
  const [, setIsOpen] = useContext(ModalContext);
  return cloneElement(child, {
    onClick: callAll(() => setIsOpen(true), child.props.onClick),
  });
}

export function ModalDismissButton({ children: child }) {
  const [, setIsOpen] = useContext(ModalContext);
  return cloneElement(child, {
    onClick: callAll(() => setIsOpen(false), child.props.onClick),
  });
}

export function ModalContentsBase(props) {
  const [isOpen, setIsOpen] = useContext(ModalContext);
  return (
    <Dialog isOpen={isOpen} onDismiss={() => setIsOpen(false)} {...props} />
  );
}

export function ModalContents({ title, children, ...props }) {
  return (
    <ModalContentsBase {...props}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          backgroundColor: 'red',
        }}
      >
        <ModalDismissButton>
          <CircleButton>
            <span aria-hidden>×</span>
          </CircleButton>
        </ModalDismissButton>
      </div>
      <h3>{title}</h3>
      {children}
    </ModalContentsBase>
  );
}
