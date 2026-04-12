import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ProfileForm } from './ProfileForm';

import { ProfileFormWrapper } from '../../wrappers/ProfileFormWrapper';

const meta: Meta<typeof ProfileForm> = {
  title: 'Forms/ProfileForm',
  component: ProfileForm,
};

export default meta;

type Story = StoryObj<typeof ProfileForm>;

export const Default: Story = {
  render: () => (
    <ProfileFormWrapper
      initialValues={{
        name: '',
      }}
    />
  ),
};
