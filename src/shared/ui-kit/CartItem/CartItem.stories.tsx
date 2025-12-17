import type { Meta, StoryObj } from '@storybook/react';
import { CartItem } from './CartItem';

const meta: Meta<typeof CartItem> = {
  title: 'Catalog/CartItem',
  component: CartItem,
  args: {
    image:
      'https://m.media-amazon.com/images/I/B1fRqw30NVL._CLa%7C2140%2C2000%7C61Nd0GysBLL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UY1000_.png',
    title: 'Фирменная футболка',
    category: 'Одежда',
    price: 29,
    quantity: 2,
  },
};

export default meta;
type Story = StoryObj<typeof CartItem>;

export const Default: Story = {};
