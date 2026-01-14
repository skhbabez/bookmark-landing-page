import clsx from "clsx";
import type { ComponentPropsWithRef } from "react";
import hero from "../../assets/illustration-hero.svg";
import Button from "../../Components/Button/Button";

const Hero = ({
  className,
  ...props
}: Omit<ComponentPropsWithRef<"section">, "children">) => {
  return (
    <section
      className={clsx(
        "flex flex-col xl:flex-row items-center gap-12 md:gap-18 xl:gap-0",
        className
      )}
      {...props}
    >
      <div className="relative w-full h-75 md:h-121.5 xl:order-2">
        <img
          className="absolute left-1/2 -translate-x-1/2 xl:translate-x-0 bottom-0 top-[calc(2.5576rem)]  md:-top-2.25 w-[22.0778rem] md:w-164.25 xl:left-[1.599375rem]"
          src={hero}
          alt=""
        />
        <div
          className={clsx(
            "absolute bg-blue-600 right-0 rounded-l-full h-50.75 md:h-88 xl:w-full xl:left-[13.70625rem] -z-10 bottom-0",
            "left-[max(4.4375rem,calc(4.4375rem+(100vw-23.4375rem)/2))]",
            "md:left-[max(15.8125rem,calc(15.8125rem+(100vw-48rem)/2))]"
          )}
        ></div>
      </div>
      <div className="max-w-135 max-md:mx-7.75 text-center xl:text-start space-y-6 xl:order-1">
        <h1 className="text-1-mobile md:text-1 text-blue-950">
          A Simple Bookmark Manager
        </h1>
        <p>
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>
        <div className="flex *:flex-1 *:min-w-fit gap-4 max-w-85.75 mx-auto xl:ms-0 flex-wrap">
          <Button type="button">Get it on Chrome</Button>
          <Button type="button" variant="secondary">
            Get it on Firefox
          </Button>
        </div>
      </div>
    </section>
  );
};
export default Hero;
