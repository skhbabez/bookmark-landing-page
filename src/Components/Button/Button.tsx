import clsx from "clsx";
import type { ComponentPropsWithRef } from "react";
interface ButtonProps extends ComponentPropsWithRef<"button"> {
  variant?: "primary" | "secondary" | "submit";
}

const Button = ({
  variant = "primary",
  className,
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={clsx(
        "min-h-12 shadow-button outline-none text-2-mobile-medium md:text-6-medium rounded-[0.3125rem] px-2 border-2 hover:bg-white focus-visible:bg-white cursor-pointer transition-colors duration-200 delay-75 ease-in-out",
        className,
        variant === "primary" &&
          "bg-blue-600 text-white border-blue-600 hover:text-blue-600 focus-visible:text-blue-600",
        variant === "secondary" &&
          "bg-grey-50 text-blue-950 border-grey-50 hover:border-grey-600 focus-visible:border-grey-600 hover:text-grey-600 focus-visible:text-grey-600",
        variant === "submit" &&
          "bg-red-400 text-white border-red-400 hover:text-red-400 focus-visible:text-red-400"
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
