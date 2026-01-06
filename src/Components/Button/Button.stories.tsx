import type { Meta, StoryObj } from "@storybook/react-vite";

import Button from "./Button";

const meta = {
  component: Button,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { variant: "primary" },
  render: (args) => <Button {...args}>Contact Us</Button>,
};
