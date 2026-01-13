import clsx from "clsx";
import type { ComponentPropsWithRef } from "react";

const NavMenu = ({
  className,
  ...props
}: Omit<ComponentPropsWithRef<"dialog">, "children">) => {
  return <dialog className={clsx("", className)} {...props}></dialog>;
};

export default NavMenu;
