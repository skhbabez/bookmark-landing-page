import type { Meta, StoryObj } from "@storybook/react-vite";

import Navigation from "./Navigation";

const meta = {
  component: Navigation,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Navigation>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
