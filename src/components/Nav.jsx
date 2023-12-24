import { useState } from "react";
import { useMediaQuery } from "../utils/useMediaQuery";
import cx from "classnames";

export default function Nav() {
  const [toggled, setToggled] = useState(false);
  const matches = useMediaQuery("(min-width: 576px)");
  const currentPath = window.location.pathname;

  return (
    <nav
      className="relative mx-8 flex justify-between items-center 
      pt-12 pb-6 font-medium md:mx-16 lg:mx-32"
    >
      <div className="flex items-center gap-12">
        <a
          className={cx(
            "text-lg tracking-wide hover:text-blue-600 hover:scale-105",
            {
              "font-semibold": currentPath === "/",
              hidden: currentPath === "/contact" && !matches,
            }
          )}
          href="/"
        >
          Home
        </a>
        <a
          className={cx(
            "text-lg tracking-wide hover:text-blue-600 hover:scale-105",
            {
              "font-semibold": currentPath === "/contact",
              hidden: currentPath === "/" && !matches,
            }
          )}
          href="/contact"
        >
          Contact us
        </a>
      </div>

      {!matches && (
        <div
          onClick={() => setToggled((prevToggle) => !prevToggle)}
          className="space-y-1 cursor-pointer z-50"
        >
          <span className="block h-0.5 w-8 bg-black"></span>
          <span className="block h-0.5 w-6 bg-black"></span>
          <span className="block h-0.5 w-4 bg-black"></span>
        </div>
      )}

      {toggled && !matches && (
        <div
          className="fixed flex bg-white bottom-0 left-0 w-full h-screen 
        items-center justify-center"
        >
          <div className="flex flex-col gap-24 text-lg items-center">
            <a href="/">Home</a>
            <a href="/contact">Contact us</a>
          </div>
        </div>
      )}
    </nav>
  );
}
