import React from 'react';
import './modal.css';

interface ModalProps {
  visible: boolean;
  children?: React.ReactNode;
  onClose?: () => void;
}

export const Modal: React.FC<ModalProps> = ({ visible, children, onClose }) => {
  if (!visible) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-window">
        <button className="modal-close" aria-label="Close modal" onClick={onClose}>
          ✕
        </button>
        {children}
      </div>
    </div>
  );
};
