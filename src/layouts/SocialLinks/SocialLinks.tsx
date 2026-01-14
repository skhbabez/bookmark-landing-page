import clsx from "clsx";
import type { ComponentPropsWithRef } from "react";
import NavLink from "../../Components/NavLink/NavLink";
import { FaSquareFacebook, FaXTwitter } from "react-icons/fa6";

const SocialLinks = ({
  className,
  ...props
}: Omit<ComponentPropsWithRef<"div">, "children">) => {
  return (
    <div
      className={clsx("flex items-center gap-10 w-fit ", className)}
      {...props}
    >
      <NavLink
        aria-label="Open on Facebook"
        href="https://www.facebook.com/"
        className="text-white"
      >
        <FaSquareFacebook size={24} />
      </NavLink>
      <NavLink
        aria-label="Open on X"
        href="https://x.com/"
        className="text-white"
      >
        <FaXTwitter size={24} />
      </NavLink>
    </div>
  );
};

export default SocialLinks;
