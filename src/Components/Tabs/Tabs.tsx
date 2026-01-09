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
    <div
      role="tablist"
      className={clsx(
        "flex flex-col gap-px md:gap-0 md:pt-0 bg-[#495DCF]/20 py-px md:flex-row",
        className
      )}
      {...props}
    >
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
      className={clsx(
        "md:flex-1 relative block text-2-mobile-regular md:text-5-regular py-4 bg-white md:pt-0 md:pb-6",
        activeValue === value ? "text-blue-950" : "text-blue-950/75",
        className
      )}
      onClick={() => setActiveValue(value)}
      {...props}
    >
      {children}
      <div
        className={clsx(
          "h-1 w-[52.41%] md:w-full absolute bg-red-400 bottom-0 left-0 right-0 mx-auto",
          activeValue === value ? "block" : "hidden"
        )}
      ></div>
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
