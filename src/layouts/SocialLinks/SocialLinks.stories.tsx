import type { Meta, StoryObj } from '@storybook/react-vite';

import SocialLinks from './SocialLinks';

const meta = {
  component: SocialLinks,
} satisfies Meta<typeof SocialLinks>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};