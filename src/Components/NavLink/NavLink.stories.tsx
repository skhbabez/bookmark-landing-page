import type { Meta, StoryObj } from "@storybook/react-vite";

import NavLink from "./NavLink";

const meta = {
  component: NavLink,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof NavLink>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => <NavLink {...args}>about</NavLink>,
};
