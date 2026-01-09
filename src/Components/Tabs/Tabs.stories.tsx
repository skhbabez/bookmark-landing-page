import type { Meta, StoryObj } from "@storybook/react-vite";

import { Tab, TabList, TabPanel, Tabs } from "./Tabs";

const meta = {
  component: Tabs,
} satisfies Meta<typeof Tabs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: () => (
    <Tabs>
      <TabList>
        <Tab value="1">test-1</Tab>
        <Tab value="2">test-2</Tab>
        <Tab value="3">test-2</Tab>
      </TabList>
      <TabPanel value="1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, quam
        nisi? Id tempora aliquam tenetur quam a, beatae nesciunt vel quaerat cum
        minus sint, delectus atque dignissimos rem ipsa aspernatur?
      </TabPanel>
      <TabPanel value="2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae odio eum
        consectetur in dolorem aspernatur dolore explicabo tempora, doloribus
        commodi laborum ad magnam et, adipisci reprehenderit eaque eligendi
        impedit consequatur.
      </TabPanel>
      <TabPanel value="3">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil dolorum
        perferendis unde beatae quasi numquam eos culpa voluptatibus a
        doloribus, inventore placeat praesentium commodi repellat facere
        corporis saepe vitae expedita?
      </TabPanel>
    </Tabs>
  ),
};
