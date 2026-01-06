import type { Meta, StoryObj } from "@storybook/react-vite";

import Newsletter from "./Newsletter";

const meta = {
  component: Newsletter,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Newsletter>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
