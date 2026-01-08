import type { Meta, StoryObj } from '@storybook/react-vite';

import Downloads from './Downloads';

const meta = {
  component: Downloads,
} satisfies Meta<typeof Downloads>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};