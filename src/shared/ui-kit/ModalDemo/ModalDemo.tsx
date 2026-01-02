import React, { useState } from 'react';
import { Modal } from '../modal/modal';
import './ModalDemo.css';

export const ModalDemo: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [text, setText] = useState('');

  return (
    <div className="modal-demo">
      <input
        className="modal-demo-input"
        type="text"
        placeholder="Введите текст"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button className="modal-demo-button" onClick={() => setVisible(true)}>
        Открыть модальное окно
      </button>

      <Modal visible={visible} onClose={() => setVisible(false)}>
        <div className="modal-demo-modal-content">
          <h3>{text || 'Пусто'}</h3>
        </div>
      </Modal>
    </div>
  );
};
