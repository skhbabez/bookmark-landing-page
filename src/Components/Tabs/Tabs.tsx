import clsx from "clsx";
import {
  createContext,
  useContext,
  useId,
  useRef,
  useState,
  type ComponentPropsWithoutRef,
  type ComponentPropsWithRef,
} from "react";

interface TabContext {
  id: string;
  activeValue: string;
  setActiveValue: (value: string) => void;
  onKeyDown: (event: React.KeyboardEvent) => void;
}
const defaultTabContext = {
  id: "",
  activeValue: "",
  setActiveValue: () => {},
  onKeyDown: () => {},
};

const TabContext = createContext<TabContext>(defaultTabContext);

interface TabsContextProps extends ComponentPropsWithoutRef<"div"> {
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
  const tabRef = useRef<HTMLDivElement>(null);

  const onKeyDown = (event: React.KeyboardEvent) => {
    if (tabRef.current) {
      const tabs: HTMLButtonElement[] = Array.from(
        tabRef.current.querySelectorAll("[role=tab]")
      );
      const currentIdx = tabs.findIndex(
        (tab) => document.activeElement === tab
      );
      const calcIndex = (offset: number) => {
        return Math.max(Math.min(currentIdx + offset, tabs.length - 1), 0);
      };

      switch (event.key) {
        case "ArrowLeft":
          tabs[calcIndex(-1)].focus();
          break;

        case "ArrowRight":
          tabs[calcIndex(1)].focus();

          break;

        case "Home":
          tabs[0].focus();
          break;

        case "End":
          tabs[tabs.length - 1].focus();

          break;

        default:
          break;
      }
    }
  };
  return (
    <TabContext value={{ id, activeValue, setActiveValue, onKeyDown }}>
      <div ref={tabRef} className={clsx("", className)} {...props}>
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
        "flex flex-col md:flex-row md:max-w-152 xl:max-w-182.5 md:justify-between mx-auto [&>[role=tab]+[role=tab]]:-mt-px",
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
  const { id, activeValue, setActiveValue, onKeyDown } = useContext(TabContext);
  const valueId = `${value}-${id}`;
  const active = activeValue === value;
  return (
    <button
      type="button"
      id={`tab-${valueId}`}
      role="tab"
      tabIndex={active ? 0 : -1}
      data-value={value}
      onKeyDown={onKeyDown}
      onFocus={() => setActiveValue(value)}
      aria-selected={active}
      aria-controls={`tabpanel-${valueId}`}
      className={clsx(
        "outline-none md:flex-1 relative block text-2-mobile-regular md:text-5-regular py-4 bg-white md:pt-0 md:pb-6",
        "max-md:border-y md:border-b border-[#495DCF]/20 ",
        active ? "text-blue-950" : "text-blue-950/75",
        className
      )}
      onClick={() => setActiveValue(value)}
      {...props}
    >
      {children}
      <div
        className={clsx(
          "h-1 w-[52.41%] md:w-full absolute bg-red-400 bottom-0 left-0 right-0 mx-auto",
          active ? "block" : "hidden"
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
  const active = activeValue === value;
  return (
    <div
      role="tabpanel"
      id={`tabpanel-${valueId}`}
      aria-labelledby={`tab-${valueId}`}
      className={clsx(active || "hidden", "", className)}
      {...props}
    >
      {children}
    </div>
  );
};

export { Tabs, TabList, Tab, TabPanel };
