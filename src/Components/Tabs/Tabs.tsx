import clsx from "clsx";
import {
  createContext,
  useContext,
  useId,
  type ComponentPropsWithRef,
} from "react";

interface TabContext {
  id: string;
}
const defaultTabContext = {
  id: "",
};

const TabContext = createContext<TabContext>(defaultTabContext);
const Tabs = ({
  className,
  children,
  ...props
}: ComponentPropsWithRef<"div">) => {
  const id = useId();
  return (
    <TabContext value={{ id: id }}>
      <div className={clsx("", className)} {...props}>
        {children}
      </div>
    </TabContext>
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

interface TabProps extends ComponentPropsWithRef<"button"> {
  value: string;
}

const Tab = ({ value, className, children, ...props }: TabProps) => {
  const { id } = useContext(TabContext);
  return (
    <button
      type="button"
      id={`tab-${value}-${id}`}
      role="tab"
      aria-selected="true"
      aria-controls={`tabpanel-${value}-${id}`}
      className={clsx("", className)}
      {...props}
    >
      {children}
    </button>
  );
};

interface TabPanelProps extends ComponentPropsWithRef<"div"> {
  value: string;
}

const TabPanel = ({ value, className, children, ...props }: TabPanelProps) => {
  const { id } = useContext(TabContext);
  return (
    <div
      role="tabpanel"
      id={`tabpanel-${value}-${id}`}
      tabIndex={0}
      aria-labelledby={`tab-${value}-${id}`}
      className={clsx("", className)}
      {...props}
    >
      {children}
    </div>
  );
};

export { Tabs, TabList, Tab, TabPanel };
