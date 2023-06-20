import { jsx } from '@emotion/react';
import React, {
  createContext,
  useState,
  useContext,
  cloneElement,
  ReactElement,
} from 'react';
import { CircleButton } from './lib';
import { Dialog } from './lib';

interface Props {
  title: string;
  children: ReactElement;
}

export const callAll =
  (...fns) =>
  (...args) =>
    fns.forEach(fn => fn && fn(...args));
const ModalContext = createContext();

export const Modal = props => {
  const [isOpen, setIsOpen] = useState(false);

  return <ModalContext.Provider value={[isOpen, setIsOpen]} {...props} />;
};

export const ModalOpenButton = ({ children: child }) => {
  const [, setIsOpen] = useContext(ModalContext);
  return cloneElement(child, {
    onClick: callAll(() => setIsOpen(true), child.props.onClick),
  });
};

export const ModalDismissButton = ({ children: child }) => {
  const [, setIsOpen] = useContext(ModalContext);
  return cloneElement(child, {
    onClick: callAll(() => setIsOpen(false), child.props.onClick),
  });
};

export const ModalContentsBase = props => {
  const [isOpen, setIsOpen] = useContext(ModalContext);
  return (
    <Dialog isOpen={isOpen} onDismiss={() => setIsOpen(false)} {...props} />
  );
};

export const ModalContents: React.FC<Props> = ({
  title,
  children,
  ...props
}) => {
  return (
    <ModalContentsBase {...props}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
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
};
