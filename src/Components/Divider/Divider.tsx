import clsx from "clsx";
import type { ComponentPropsWithRef } from "react";

const Divider = ({ className, ...props }: ComponentPropsWithRef<"hr">) => {
  return (
    <hr
      className={clsx(
        "bg-blue-950 border-none h-px opacity-[14.77%]",
        className
      )}
      {...props}
    />
  );
};

export default Divider;
