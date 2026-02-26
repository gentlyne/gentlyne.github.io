import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SignUpForm } from './SignUpForm';

import { SignUpFormWrapper } from '../../wrappers/SignUpFormWrapper';

const meta: Meta<typeof SignUpForm> = {
  title: 'Forms/SignUpForm',
  component: SignUpForm,
};

export default meta;

type Story = StoryObj<typeof SignUpForm>;

export const Default: Story = {
  render: () => <SignUpFormWrapper />,
};
