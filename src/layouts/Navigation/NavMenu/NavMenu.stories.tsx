import type { Meta, StoryObj } from "@storybook/react-vite";

import NavMenu from "./NavMenu";

const meta = {
  component: NavMenu,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <div className="bg-blue-950/95 h-screen">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof NavMenu>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { closeMenu: () => {} },
};
