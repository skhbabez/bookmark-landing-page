import type { Meta, StoryObj } from "@storybook/react-vite";

import Dialog from "./Dialog";
import { useArgs } from "storybook/internal/preview-api";

const meta = {
  component: Dialog,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Dialog>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isOpen: false,
  },
  render: function Render() {
    const [{ isOpen }, updateArgs] = useArgs();
    return (
      <div>
        <button
          className="mx-auto block border-black border-2"
          onClick={() => updateArgs({ isOpen: true })}
        >
          Open Dialog
        </button>
        <Dialog isOpen={isOpen}>
          <button
            className="mx-auto block border-black border-2"
            onClick={() => updateArgs({ isOpen: false })}
          >
            Close Dialog
          </button>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam dolor
          consequuntur qui cupiditate assumenda sit rem possimus saepe quaerat
          tempora! Ipsum quidem et nulla nemo. Iste cupiditate doloribus
          expedita blanditiis!
        </Dialog>
      </div>
    );
  },
};
