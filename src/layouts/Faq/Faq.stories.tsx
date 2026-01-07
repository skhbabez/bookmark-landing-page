import type { Meta, StoryObj } from '@storybook/react-vite';

import Faq from './Faq';

const meta = {
  component: Faq,
} satisfies Meta<typeof Faq>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};