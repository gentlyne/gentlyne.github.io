import type { Meta, StoryObj } from '@storybook/react';
import { AddToCartButton } from './AddToCartButton';

const meta: Meta<typeof AddToCartButton> = {
  title: 'Catalog/AddToCart',
  component: AddToCartButton,
  args: {
    count: 0,
  },
};

export default meta;
export type Story = StoryObj<typeof AddToCartButton>;

export const Default: Story = {
  args: {
    count: 0,
  },
};
