import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { LanguageToggle } from './LanguageToggle';
import { LanguageProvider } from '../../../contexts/LanguageContext';

const meta: Meta<typeof LanguageToggle> = {
  title: 'UI/LanguageToggle',
  component: LanguageToggle,
  decorators: [
    (Story) => (
      <LanguageProvider>
        <Story />
      </LanguageProvider>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof LanguageToggle>;

export const Default: Story = {};
