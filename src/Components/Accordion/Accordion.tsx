import clsx from "clsx";
import type { ComponentPropsWithRef } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";

const Accordion = ({
  className,
  children,
  ...props
}: ComponentPropsWithRef<"details">) => {
  return (
    <details className={clsx("group ", className)} {...props}>
      {children}
    </details>
  );
};
const AccordionTrigger = ({
  className,
  children,
  ...props
}: ComponentPropsWithRef<"summary">) => {
  return (
    <summary
      className={clsx(
        `text-2-mobile-regular md:text-4 text-blue-950 list-none flex items-center justify-between md:pe-6 cursor-pointer
        hover:text-red-400 focus:text-red-400 focus-visible:text-red-400
        transition-colors duration-200 ease-in-out
        focus-visible:outline-2 outline-blue-950 outline-offset-2 rounded-sm`,
        className
      )}
      {...props}
    >
      {children}
      <FaAngleUp size={18} className="hidden group-open:inline text-red-400" />
      <FaAngleDown
        size={18}
        className="inline group-open:hidden text-blue-600"
      />
    </summary>
  );
};
const AccordionContent = ({
  className,
  children,
  ...props
}: ComponentPropsWithRef<"span">) => {
  return (
    <span
      className={clsx(
        "inline-block text-2-mobile-light md:text-5-light text-blue-950/75 mt-4",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};

export { Accordion, AccordionTrigger, AccordionContent };
