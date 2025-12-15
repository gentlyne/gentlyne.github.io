import type { Meta, StoryObj } from '@storybook/react';
import { OperationFull } from './OperationFull';

const meta: Meta<typeof OperationFull> = {
  title: 'Finance/OperationFull',
  component: OperationFull,
  args: {
    amount: 1200,
    category: 'Еда',
    title: 'Покупка продуктов',
    description: 'Купил овощи, фрукты и молочные продукты на всю неделю',
    date: '2025-01-15',
  },
};

export default meta;
export type Story = StoryObj<typeof OperationFull>;

export const Default: Story = {
  args: {
    amount: 1120,
  },
};
