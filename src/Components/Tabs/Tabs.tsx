import clsx from "clsx";
import type { ComponentPropsWithRef } from "react";

const Tabs = ({
  className,
  children,
  ...props
}: ComponentPropsWithRef<"div">) => {
  return (
    <div className={clsx("", className)} {...props}>
      {children}
    </div>
  );
};

const TabList = ({
  className,
  children,
  ...props
}: ComponentPropsWithRef<"div">) => {
  return (
    <div role="tablist" className={clsx("", className)} {...props}>
      {children}
    </div>
  );
};

const Tab = ({
  className,
  children,
  ...props
}: ComponentPropsWithRef<"button">) => {
  return (
    <button
      type="button"
      role="tab"
      aria-selected="true"
      //   aria-controls="tabpanel-1"
      className={clsx("", className)}
      {...props}
    >
      {children}
    </button>
  );
};

const TabPanel = ({
  className,
  children,
  ...props
}: ComponentPropsWithRef<"div">) => {
  return (
    <div
      role="tabpanel"
      tabIndex={0}
      aria-labelledby="tab-1"
      className={clsx("", className)}
      {...props}
    >
      {children}
    </div>
  );
};

export { Tabs, TabList, Tab, TabPanel };
