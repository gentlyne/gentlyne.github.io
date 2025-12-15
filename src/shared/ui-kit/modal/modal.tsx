import React from 'react';
import './modal.css';

interface ModalProps {
  visible: boolean;
  children?: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ visible, children }) => {
  if (!visible) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-window">
        <button className="modal-close" aria-label="Close modal">
          ✕
        </button>
        {children}
      </div>
    </div>
  );
};
