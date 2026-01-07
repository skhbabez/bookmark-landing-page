import type { Meta, StoryObj } from "@storybook/react-vite";

import { Accordion, AccordionTrigger, AccordionContent } from "./Accordion";

const meta = {
  component: Accordion,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Accordion>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: (args) => (
    <>
      <Accordion {...args}>
        <AccordionTrigger>What is Bookmark?</AccordionTrigger>
        <AccordionContent>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
          tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis
          quam ornare mattis.
        </AccordionContent>
      </Accordion>
      <Accordion {...args}>
        <AccordionTrigger>How can I request a new browser?</AccordionTrigger>
        <AccordionContent>
          Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa,
          ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros
          aliquet convallis ultricies. Mauris augue massa, ultricies non ligula.
          Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies.
          Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.
        </AccordionContent>
      </Accordion>
    </>
  ),
};
