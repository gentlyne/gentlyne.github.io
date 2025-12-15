import type { Meta, StoryObj } from '@storybook/react';
import { Layout } from './layout';

const meta: Meta<typeof Layout> = {
  title: 'UI/Layout',
  component: Layout,
  argTypes: {
    children: {
      control: 'text',
      description: 'Содержимое основного блока',
    },
  },
  args: {
    children: 'Это тестовый контент внутри Layout',
  },
};

export default meta;
type Story = StoryObj<typeof Layout>;

export const Default: Story = {};
