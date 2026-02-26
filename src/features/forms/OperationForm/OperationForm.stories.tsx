import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { OperationForm } from './OperationForm';

import { OperationFormWrapper } from '../../wrappers/OperationFormWrapper';

const meta: Meta<typeof OperationForm> = {
  title: 'Forms/OperationForm',
  component: OperationForm,
};

export default meta;

type Story = StoryObj<typeof OperationForm>;

export const Default: Story = {
  render: () => <OperationFormWrapper />,
};
