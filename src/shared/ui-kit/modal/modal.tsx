import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.scss';

interface ModalProps {
  visible: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ visible, onClose, children }) => {
  if (!visible) return null;

  return ReactDOM.createPortal(
    <div className="modal">
      <div className="modal__mask" onClick={onClose} />

      <div className="modal__content">
        <button className="modal__close" onClick={onClose} aria-label="Close modal">
          ×
        </button>

        {children}
      </div>
    </div>,
    document.body
  );
};
