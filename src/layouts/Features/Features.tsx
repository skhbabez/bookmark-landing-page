import type { ComponentPropsWithRef } from "react";
import clsx from "clsx";
import { Tab, TabList, TabPanel, Tabs } from "../../Components/Tabs/Tabs";
import Button from "../../Components/Button/Button";

const tabContent = [
  {
    value: "1",
    tab: "Simple Bookmarking",
    title: "Bookmark in one click",
    text: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
    src: "/images/illustration-features-tab-1.svg",
  },
  {
    value: "2",
    tab: "Speedy Searching",
    title: "Intelligent search",
    text: "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
    src: "/images/illustration-features-tab-2.svg",
  },
  {
    value: "3",
    tab: "Easy Sharing",
    title: "Share your bookmarks",
    text: "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
    src: "/images/illustration-features-tab-3.svg",
  },
];

const Features = ({
  className,
  ...props
}: Omit<ComponentPropsWithRef<"section">, "children">) => {
  return (
    <section className={clsx("text-center", className)} {...props}>
      <div className="max-w-135 space-y-4 mx-auto">
        <h2 className="text-1-mobile md:text-2">Features</h2>
        <p>
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>
      </div>

      <Tabs defaultValue="1">
        <TabList className="px-8 md:px-20 xl:px-0 mt-8 md:mt-18">
          {tabContent.map(({ value, tab }) => (
            <Tab value={value}>{tab}</Tab>
          ))}
        </TabList>
        {tabContent.map(({ value, title, text, src }) => (
          <TabPanel
            className="flex flex-col gap-8 md:gap-16 xl:flex-row xl:gap-30 items-center"
            value={value}
          >
            <div className="w-full">
              <img src={src} alt="" />
            </div>
            <div className="max-w-112.5 max-md:px-8 space-y-4 md:space-y-6 ">
              <h3 className="text-1-mobile md:text-2 max-md:px-14">{title}</h3>
              <p className="text-2-mobile-regular md:text-4 text-blue-950/50">
                {text}
              </p>
              <Button className="px-5.5" type="button">
                More Info
              </Button>
            </div>
          </TabPanel>
        ))}
      </Tabs>
    </section>
  );
};

export default Features;
