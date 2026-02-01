import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from './Modal';

const meta: Meta<typeof Modal> = {
  title: 'UI/Modal',
  component: Modal,
};

export default meta;

type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState<boolean>(false);
    const [value, setValue] = useState<string>('');

    return (
      <div style={{ padding: 40 }}>
        <input
          type="text"
          placeholder="Введите текст"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          style={{ marginBottom: 12, display: 'block' }}
        />

        <button onClick={() => setOpen(true)}>Открыть модальное окно</button>

        <Modal visible={open} onClose={() => setOpen(false)}>
          <p>{value || 'Текст из инпута появится здесь'}</p>
        </Modal>
      </div>
    );
  },
};
