import type { ComponentPropsWithRef } from "react";
import NavLink from "../../Components/NavLink/NavLink";
import clsx from "clsx";
import bookmark from "../../assets/bookmark.svg";
import logo from "../../assets/logo-white.svg";
import { FaSquareFacebook, FaX, FaXTwitter } from "react-icons/fa6";
import Divider from "../../Components/Divider/Divider";

const navLinks = ["features", "pricing", "contact"];
interface NavMenuProps extends Omit<ComponentPropsWithRef<"div">, "children"> {
  closeMenu: () => void;
}

const NavMenu = ({ closeMenu, className, ...props }: NavMenuProps) => {
  return (
    <div className={clsx("h-screen", className)} {...props}>
      <div className="flex justify-between">
        <div className="flex gap-3 items-center">
          <img className="text-white" src={logo} alt="" />
          <img src={bookmark} alt="" />
        </div>
        <button
          onClick={closeMenu}
          className="focus-visible:outline-red-400 xl:hidden"
        >
          <FaX
            className="text-white hover:text-red-400 transition-colors duration-200 delay-75 ease-in-out"
            size={15}
            aria-label="Close Navigation Menu"
          />
        </button>
      </div>
      <ul className="flex flex-col gap-8 text-center mt-10">
        {navLinks.map((text) => (
          <>
            <Divider className="bg-white!" />
            <li>
              <NavLink className="text-white text-7!" href={`/${text}`}>
                {text}
              </NavLink>
            </li>
          </>
        ))}
        <Divider className="bg-white!" />
      </ul>
      <div className="mb-12 flex flex-col justify-between">
        <button
          className={clsx(
            "mt-6 md:mt-8 uppercase text-white w-full border-2 border-white rounded-[0.3125rem] min-h-12",
            "transition-colors duration-200 delay-75 ease-in-out hover:border-red-400 hover:text-red-400 focus-visible:border-red-400 focus-visible:text-red-400"
          )}
        >
          login
        </button>
        <div className="flex gap-10 xl:ml-auto mx-auto w-fit">
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
      </div>
    </div>
  );
};

export default NavMenu;
