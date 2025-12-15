import type { Meta, StoryObj } from '@storybook/react';
import { OperationShort } from './OperationShort';

const meta: Meta<typeof OperationShort> = {
  title: 'Finance/OperationShort',
  component: OperationShort,
  args: {
    amount: 1200,
    category: 'Еда',
    title: 'Покупка продуктов',
    description: 'Купил овощи, фрукты и молочные продукты на всю неделю',
  },
};

export default meta;
export type Story = StoryObj<typeof OperationShort>;

export const Default: Story = {};
