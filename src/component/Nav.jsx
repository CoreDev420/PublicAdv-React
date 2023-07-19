import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu } from "@headlessui/react";
import { Transition } from "@headlessui/react";
import { useGlobalVariables } from "../hooks";
import { useBetween } from "use-between";
import { useEffect, useState } from "react";
import { menuItems } from "./MenuItems";
const useSharedGlobalVariables = () => useBetween(useGlobalVariables);

const Nav = () => {
  const [scrollActive, setScrollActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isCategorySub, setIsCategorySub] = useState(false);
  const { activeNavItem, setClassActive } = useSharedGlobalVariables(); // menu check
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20);
    });
  });
  return (
    <div
      className={
        "fixed top-0 w-full z-30 bg-black transition-all " +
        (scrollActive ? " shadow-md shadow-green-600 pt-0" : " pt-1")
      }
    >
      <header className="container mx-auto flex px-8 justify-between max-w-6xl">
        <div className="flex">
          <a
            href="/"
            className=" rounded-full w-[30px] h-[30px] mr-2 flex justify-center items-center text-white hover:bg-[#18d26e] hover:transition hover:ease-in-out hover:delay-100"
          >
            <i className="icofont-facebook"></i>
          </a>
          <a
            href="/"
            className=" rounded-full w-[30px] h-[30px] mr-2  flex justify-center items-center text-white hover:bg-[#18d26e] hover:transition hover:ease-in-out hover:delay-100"
          >
            <i className="icofont-twitter"></i>
          </a>
          <a
            href="/"
            className=" rounded-full w-[30px] h-[30px] mr-2  flex justify-center items-center text-white hover:bg-[#18d26e] hover:transition hover:ease-in-out hover:delay-100"
          >
            <i className="icofont-youtube-play"></i>
          </a>
          <a
            href="/"
            className=" rounded-full w-[30px] h-[30px] mr-2  flex justify-center items-center text-white hover:bg-[#18d26e] hover:transition hover:ease-in-out hover:delay-100"
          >
            <i className="icofont-pinterest"></i>
          </a>
          <a
            href="/"
            className=" rounded-full w-[30px] h-[30px] mr-2  flex justify-center items-center text-white hover:bg-[#18d26e] hover:transition hover:ease-in-out hover:delay-100"
          >
            <i className="icofont-instagram"></i>
          </a>
          <a
            href="/"
            className=" rounded-full w-[30px] h-[30px] mr-2  flex justify-center items-center text-white hover:bg-[#18d26e] hover:transition hover:ease-in-out hover:delay-100"
          >
            <i className="icofont-whatsapp"></i>
          </a>
        </div>
        <div className="flex my-auto justify-center">
          <i className=" w-auto h-auto mr-2  text-white icofont-location-pin my-auto"></i>
          <span className="text-[13px] font-bold text-white self-center pr-1">
            Ubicación
          </span>
          <select
            id="openonarrow"
            className="bg-black text-white border rounded text-center"
          >
            <option>Cusco</option>
            <option>Wanchaq</option>
            <option>Santiago</option>
            <option>San Sebastian</option>
            <option>San Jerónimo</option>
          </select>
        </div>
      </header>
      {/* main navbar */}
      <nav className="bg-[#3C3241]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="h-10 w-10"
                  src="/img/logo_200x200.png"
                  alt="Workflow"
                />
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  {menuItems.map((menu, index) => {
                    return (
                      <a
                        href={menu.url}
                        key={index}
                        className={
                          "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative text-[17px] text-white" +
                          (activeNavItem === ""
                            ? " text-orange-500 animation-active "
                            : " text-black-500 hover:text-orange-500 ")
                        }
                      >
                        {menu.title}
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>

                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a
                  href="/"
                  className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Dashboard
                </a>

                <a
                  href="/"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Team
                </a>

                <a
                  href="/"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Projects
                </a>

                <a
                  href="/"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Calendar
                </a>

                <a
                  href="/"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Reports
                </a>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
};
export default Nav;
