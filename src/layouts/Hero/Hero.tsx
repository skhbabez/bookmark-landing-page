import clsx from "clsx";
import type { ComponentPropsWithRef } from "react";
import hero from "../../assets/illustration-hero.svg";

const Hero = ({
  className,
  ...props
}: Omit<ComponentPropsWithRef<"section">, "children">) => {
  return (
    <section className={clsx("", className)} {...props}>
      <div className="relative h-75 md:h-121.5">
        <img
          className="absolute left-1/2  -translate-x-1/2 xl:translate-x-0 bottom-0 top-[calc(40.9211px)]  md:-top-2.25 w-[353.2455px] md:w-164.25 xl:left-[25.59px]"
          src={hero}
          alt=""
        />
        <div
          className={clsx(
            "absolute bg-blue-600 right-0 rounded-l-full h-50.75 md:h-88 w-[81.07%] md:w-[67.06%] xl:w-full xl:left-[13.70625rem] -z-10 bottom-0"
          )}
        ></div>
      </div>
    </section>
  );
};
export default Hero;
