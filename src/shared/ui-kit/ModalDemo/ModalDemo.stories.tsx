import type { Meta, StoryObj } from '@storybook/react';
import { ModalDemo } from './ModalDemo';

const meta: Meta<typeof ModalDemo> = {
  title: 'UI/ModalWithInput',
  component: ModalDemo,
};

export default meta;
type Story = StoryObj<typeof ModalDemo>;

export const Default: Story = {};
