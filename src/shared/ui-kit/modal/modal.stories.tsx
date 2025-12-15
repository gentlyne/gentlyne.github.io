import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from './modal';

const meta: Meta<typeof Modal> = {
  title: 'UI/Modal',
  component: Modal,
  argTypes: {
    visible: {
      control: 'boolean',
      description: 'Показывает или скрывает модальное окно',
    },
    children: {
      control: 'text',
      description: 'Содержимое окна',
    },
  },
  args: {
    visible: true,
    children: 'Пример содержимого модального окна',
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {};
