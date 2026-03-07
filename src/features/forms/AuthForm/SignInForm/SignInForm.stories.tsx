import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SignInForm } from './SignInForm';

import { SignInFormWrapper } from '../../../wrappers/SignInFormWrapper';

const meta: Meta<typeof SignInForm> = {
  title: 'Forms/SignInForm',
  component: SignInForm,
};

export default meta;

type Story = StoryObj<typeof SignInForm>;

export const Default: Story = {
  render: () => <SignInFormWrapper />,
};
