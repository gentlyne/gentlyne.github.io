import type { Meta, StoryObj } from '@storybook/react';
import { ProductCardShort } from './ProductCardShort';

const meta: Meta<typeof ProductCardShort> = {
  title: 'Catalog/ProductCardShort',
  component: ProductCardShort,
  args: {
    image:
      'https://m.media-amazon.com/images/I/B1fRqw30NVL._CLa%7C2140%2C2000%7C61Nd0GysBLL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UY1000_.png',
    title: 'Фирменная футболка',
    description: 'Качественные фирменные футболки из мягкой хлопчатобумажной ткани идеальные для повседневной носки.',
    price: 29,
    count: 0,
  },
};

export default meta;
type Story = StoryObj<typeof ProductCardShort>;

export const Default: Story = {};
