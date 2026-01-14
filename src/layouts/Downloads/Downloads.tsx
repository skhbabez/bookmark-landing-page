import Button from "../../Components/Button/Button";
import dots from "../../assets/bg-dots.svg";
import firefox from "../../assets/logo-firefox.svg";
import chrome from "../../assets/logo-chrome.svg";
import opera from "../../assets/logo-opera.svg";
import type { ComponentPropsWithRef } from "react";
import clsx from "clsx";
const cards = [
  { browser: "chrome", version: "62", icon: chrome },
  { browser: "firefox", version: "55", icon: firefox },
  { browser: "opera", version: "46", icon: opera },
];
const Downloads = ({
  className,
  ...props
}: Omit<ComponentPropsWithRef<"section">, "children">) => {
  return (
    <section
      className={clsx(
        "text-center max-w-226 flex flex-col items-center",
        className
      )}
      {...props}
    >
      <h2 className="text-1-mobile md:text-2 text-blue-950">
        Download the extension
      </h2>
      <p className="max-w-135.25 mt-4">
        We’ve got more browsers in the pipeline. Please do let us know if you’ve
        got a favourite you’d like us to prioritize.
      </p>
      <ul className="mt-10 md:mt-16 xl:mt-12 flex flex-col items-center xl:items-start md:flex-row gap-10 md:gap-2 xl:gap-8 xl:[&>*:nth-child(3)]:mt-20 xl:[&>*:nth-child(2)]:mt-10">
        {cards.map(({ browser, version, icon }) => (
          <li
            key={browser}
            className="py-8 max-w-70 overflow-hidden space-y-6 shadow-card"
          >
            <div className="space-y-8">
              <img
                className="mx-auto h-25 md:h-[71.16px] xl:h-25"
                src={icon}
                alt=""
              />
              <hgroup className="space-y-2">
                <h3 className="text-5-mobile md:text-3">Add to {browser}</h3>
                <p className="text-2-mobile-regular! md:text-6-regular!">
                  Minimum version {version}
                </p>
              </hgroup>
            </div>
            <img src={dots} alt="" />
            <div className="px-6 md:max-xl:px-2.25">
              <Button
                type="button"
                className="w-full md:px-0 md:max-xl:min-h-[34.16px]"
              >
                Add & Install Extension
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Downloads;
