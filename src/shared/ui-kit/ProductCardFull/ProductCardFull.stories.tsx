import type { Meta, StoryObj } from '@storybook/react';
import { ProductCardFull } from './ProductCardFull';

const meta: Meta<typeof ProductCardFull> = {
  title: 'Catalog/ProductCardFull',
  component: ProductCardFull,
  args: {
    image:
      'https://m.media-amazon.com/images/I/B1fRqw30NVL._CLa%7C2140%2C2000%7C61Nd0GysBLL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UY1000_.png',
    category: 'Одежда',
    title: 'Фирменная футболка',
    description:
      'Высококачественные брендированные футболки из натурального хлопка. Мягкие, удобные и идеально подходят как для повседневной носки, так и для корпоративного мерча.',
    price: 29,
    count: 0,
  },
};

export default meta;
type Story = StoryObj<typeof ProductCardFull>;

export const Default: Story = {};
