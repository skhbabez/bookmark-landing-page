import type { ComponentPropsWithRef } from "react";
import clsx from "clsx";
import { Tab, TabList, TabPanel, Tabs } from "../../Components/Tabs/Tabs";
import Button from "../../Components/Button/Button";
import feature1 from "../../assets/illustration-features-tab-1.svg";
import feature2 from "../../assets/illustration-features-tab-2.svg";
import feature3 from "../../assets/illustration-features-tab-3.svg";

const tabContent = [
  {
    value: "1",
    tab: "Simple Bookmarking",
    title: "Bookmark in one click",
    text: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
    src: feature1,
  },
  {
    value: "2",
    tab: "Speedy Searching",
    title: "Intelligent search",
    text: "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
    src: feature2,
  },
  {
    value: "3",
    tab: "Easy Sharing",
    title: "Share your bookmarks",
    text: "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
    src: feature3,
  },
];

const Features = ({
  className,
  ...props
}: Omit<ComponentPropsWithRef<"section">, "children">) => {
  return (
    <section className={clsx("text-center max-md:px-8", className)} {...props}>
      <div className="max-w-135 space-y-4 mx-auto">
        <h2 className="text-1-mobile md:text-2">Features</h2>
        <p>
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>
      </div>

      <Tabs defaultValue="1">
        <TabList className="px-8 md:mx-auto mt-8 md:mt-18 md:max-w-152 xl:max-w-182.5">
          {tabContent.map(({ value, tab }) => (
            <Tab key={value} value={value}>
              {tab}
            </Tab>
          ))}
        </TabList>
        {tabContent.map(({ value, title, text, src }) => (
          <TabPanel
            tabIndex={0}
            key={value}
            className="flex flex-col gap-8 md:gap-16 xl:flex-row xl:gap-30 items-center"
            value={value}
          >
            <div className="relative h-70.5 md:h-119.5 xl:h-126.75 w-full xl:w-[48.95%]">
              <div
                className={clsx(
                  "absolute bg-blue-600 rounded-r-full h-50.75 md:h-88 w-[82.13%] xl:w-full xl:right-16.25 -z-10 bottom-0",
                  value === "1" ? "md:w-[83.72%]" : "md:w-[67.84%]"
                )}
              ></div>
              <img
                src={src}
                className={clsx(
                  "absolute",
                  value === "1" &&
                    "top-11 md:top-10.75 xl:top-18.75 left-1/2 md:left-[56.90%] xl:left-auto xl:right-0 -translate-x-1/2 xl:translate-0 h-50.25 md:h-86.5",
                  value === "2" &&
                    "top-7.75 md:top-16.75  xl:top-18 left-1/2 xl:left-auto xl:right-0 -translate-x-1/2 xl:translate-0 w-[16.969375rem] md:w-117",
                  value === "3" &&
                    "top-7.75 md:top-16.75 xl:top-18 left-1/2 md:left-[51.43%] xl:left-auto xl:right-5.25 -translate-x-1/2 xl:translate-0 h-55 md:h-95"
                )}
                alt=""
              />
            </div>
            <div className="max-w-112.5 max-md:px-8 space-y-4 md:space-y-6 xl:text-start ">
              <h3 className="text-1-mobile md:text-2 max-md:px-14">{title}</h3>
              <p>{text}</p>
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
