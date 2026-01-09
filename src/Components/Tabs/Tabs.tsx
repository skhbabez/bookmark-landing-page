import clsx from "clsx";
import {
  createContext,
  useContext,
  useId,
  useState,
  type ComponentPropsWithRef,
} from "react";

interface TabContext {
  id: string;
  activeValue: string;
  setActiveValue: (value: string) => void;
}
const defaultTabContext = {
  id: "",
  activeValue: "",
  setActiveValue: () => {},
};

const TabContext = createContext<TabContext>(defaultTabContext);

interface TabsContextProps extends ComponentPropsWithRef<"div"> {
  defaultValue: string;
}
const Tabs = ({
  defaultValue,
  className,
  children,
  ...props
}: TabsContextProps) => {
  const id = useId();
  const [activeValue, setActiveValue] = useState(defaultValue);
  return (
    <TabContext value={{ id, activeValue, setActiveValue }}>
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
  const { id, activeValue, setActiveValue } = useContext(TabContext);
  const valueId = `${value}-${id}`;
  return (
    <button
      type="button"
      id={`tab-${valueId}`}
      role="tab"
      aria-selected={activeValue === value}
      aria-controls={`tabpanel-${valueId}`}
      className={clsx("", className)}
      onClick={() => setActiveValue(value)}
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
  const { id, activeValue } = useContext(TabContext);
  const valueId = `${value}-${id}`;
  return (
    <div
      role="tabpanel"
      id={`tabpanel-${valueId}`}
      tabIndex={0}
      aria-labelledby={`tab-${valueId}`}
      className={clsx(activeValue === value || "hidden", "", className)}
      {...props}
    >
      {children}
    </div>
  );
};

export { Tabs, TabList, Tab, TabPanel };
