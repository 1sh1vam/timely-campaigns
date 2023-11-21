import React from 'react';
import { createPortal } from 'react-dom';

type ModalProps = {
  children: React.ReactNode;
}

const Modal = ({ children }: ModalProps) => {
  return createPortal(children, document.body)
}

export default Modal