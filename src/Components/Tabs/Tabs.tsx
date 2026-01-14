import clsx from "clsx";
import {
  createContext,
  useContext,
  useEffect,
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
      event.preventDefault();
      const tabs: HTMLButtonElement[] = Array.from(
        tabRef.current.querySelectorAll("[role=tab]")
      );
      const currentIdx = tabs.findIndex(
        (tab) => document.activeElement === tab
      );
      const calcIndex = (offset: number) => {
        const newIndex = currentIdx + offset;
        if (newIndex < 0) {
          return tabs.length - 1;
        }
        if (newIndex >= tabs.length) {
          return 0;
        }
        return newIndex;
      };
      const media = window.matchMedia("(min-width: 768px)").matches;
      switch (event.key) {
        case "ArrowLeft":
          if (media) {
            tabs[calcIndex(-1)].focus();
          }
          break;

        case "ArrowRight":
          if (media) {
            tabs[calcIndex(1)].focus();
          }
          break;

        case "ArrowUp":
          if (!media) {
            tabs[calcIndex(-1)].focus();
          }
          break;

        case "ArrowDown":
          if (!media) {
            tabs[calcIndex(1)].focus();
          }
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
  const [isHorizontal, setIsHorizontal] = useState(
    window.matchMedia("(min-width: 768px)").matches
  );

  useEffect(() => {
    const handleChange = (event: MediaQueryListEvent) => {
      setIsHorizontal(event.matches);
    };
    const query = window.matchMedia("(min-width: 768px)");
    query.addEventListener("change", handleChange);

    return () => {
      query.removeEventListener("change", handleChange);
    };
  }, []);

  return (
    <div
      role="tablist"
      aria-orientation={isHorizontal ? "horizontal" : "vertical"}
      className={clsx(
        "flex flex-col md:flex-row md:justify-between [&>[role=tab]+[role=tab]]:-mt-px",
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
        "outline-none md:flex-1 relative block text-2-mobile-regular md:text-5-regular py-4 md:pt-0 md:pb-6",
        "max-md:border-y md:border-b border-[#495DCF]/20 ",
        active ? "text-blue-950" : "text-blue-950/75",
        className
      )}
      onClick={() => setActiveValue(value)}
      {...props}
    >
      {children}
      <span
        className={clsx(
          "block h-1 w-[52.41%] md:w-full absolute bg-red-400 bottom-0 left-0 right-0 mx-auto",
          active ? "block" : "hidden"
        )}
      ></span>
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
      className={clsx(
        active || "hidden",
        "transition-all motion-reduce:transition-none starting:opacity-0 duration-500 ease-out",
        "starting:-translate-x-1/2",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export { Tabs, TabList, Tab, TabPanel };
