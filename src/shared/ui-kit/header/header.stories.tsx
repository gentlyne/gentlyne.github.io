import type { Meta, StoryObj } from '@storybook/react';
import { Header } from './Header';

import { Logo } from '../logo/logo';
import { ThemeToggle } from '../ThemeToggle/ThemeToggle';
import { LanguageToggle } from '../LanguageToggle/LanguageToggle';
import React from 'react';
import { ThemeProvider } from '../../../contexts/ThemeContext';
import { LanguageProvider } from '../../../contexts/LanguageContext';

const meta: Meta<typeof Header> = {
  title: 'UI/Header',
  component: Header,
};

export default meta;

type Story = StoryObj<typeof Header>;

export const Default: Story = {
  render: () => (
    <ThemeProvider>
      <LanguageProvider>
        <Header
          leftSlot={<Logo />}
          rightSlot={
            <>
              <LanguageToggle />
              <ThemeToggle />
            </>
          }
        />
      </LanguageProvider>
    </ThemeProvider>
  ),
};

export const WithCenterContent: Story = {
  render: () => (
    <ThemeProvider>
      <LanguageProvider>
        <Header
          leftSlot={<Logo />}
          rightSlot={
            <>
              <LanguageToggle />
              <ThemeToggle />
            </>
          }
        >
          <input
            type="text"
            placeholder="Search..."
            style={{
              padding: '6px 10px',
              borderRadius: 6,
              border: '1px solid #ccc',
            }}
          />
        </Header>
      </LanguageProvider>
    </ThemeProvider>
  ),
};

export const OnlyLayout: Story = {
  render: () => <Header leftSlot={<div>Left</div>} rightSlot={<div>Right</div>} />,
};

export const Empty: Story = {
  render: () => <Header />,
};
