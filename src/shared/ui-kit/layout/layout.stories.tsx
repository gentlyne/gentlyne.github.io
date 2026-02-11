import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Layout } from './layout';
import { Header } from '../Header/Header';

// Простейший кастомный Footer для примера
const CustomFooter = () => <div>© 2026 App</div>;

export default {
  title: 'UI/Layout',
  component: Layout,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Layout>;

const Template: ComponentStory<typeof Layout> = (args) => <Layout {...args} />;

// Стандартный Layout с дефолтным Header
export const Default = Template.bind({});
Default.args = {
  children: (
    <>
      <p>Основной контент размещается здесь...</p>
      <p>Ещё один абзац для проверки правильности расположения текста.</p>
    </>
  ),
};

// Layout с кастомным Header и Footer
export const WithCustomSlots = Template.bind({});
WithCustomSlots.args = {
  headerSlot: <Header leftSlot={<div>Logo</div>} rightSlot={<div>Menu</div>} />,
  footerSlot: <CustomFooter />,
  children: (
    <>
      <p>В этом макете используются настраиваемые поля для верхнего и нижнего колонтитулов.</p>
      <p>Гибкий зазор между секциями применен правильно.</p>
    </>
  ),
};
