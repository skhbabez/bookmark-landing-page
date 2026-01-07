import clsx from "clsx";
import type { ComponentPropsWithRef } from "react";

const NavLink = ({
  className,
  children,
  ...props
}: ComponentPropsWithRef<"a">) => {
  return (
    <a
      className={clsx(
        `hover:text-red-400 focus:text-red-400 focus-visible:text-red-400
        text-2-mobile-regular md:text-6-regular uppercase cursor-pointer
        transition-colors duration-200 ease-in-out
        focus-visible:outline-2 outline-blue-950 outline-offset-2 rounded-sm`,
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
};
export default NavLink;
