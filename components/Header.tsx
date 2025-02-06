"use client";

import { FC, useState, useEffect } from "react";
import { Rubik } from "next/font/google";
import Link from "next/link";
import logo from "@/public/assets/logos/logo-new-white.svg";
import Image from "next/image";
import { MdOutlineMenuOpen, MdClose } from "react-icons/md";
// import { MdDarkMode, MdLightMode } from "react-icons/md";
// import { useTheme } from "next-themes";

const rubik = Rubik({ subsets: ["latin"] });

export const Header: FC = () => {
  const [dropdownActivated, setDropdownActivated] = useState<boolean>(false);

  // const { theme, setTheme } = useTheme();

  const activateDropdown = () => {
    document.body.classList.add("no-scroll");
    setDropdownActivated(true);
  };

  const deactivateDropdown = () => {
    document.body.classList.remove("no-scroll");
    setDropdownActivated(false);
  };

  useEffect(() => {
    window.addEventListener("resize", deactivateDropdown);
  }, []);

  return (
    <header className="w-[100vw] fixed top-2 z-10 text-[--black] dark:text-[--white] shadow lg:shadow-none px-2 flex">
      <div className="w-full max-w-page flex gap-2 mx-auto">
        <div className="grow flex justify-between px-10 items-center rounded-full backdrop-filter backdrop-blur-[10px] shadow-[0_0_20px_-8px_rgba(255,255,255,.25)]">
          <div className="py-1">
            <Link
              className="flex gap-2 relative py-1 focus:outline focus:outline-[1px] focus:outline-[rgba(0,200,255,.25)] rounded-full focus:px-4"
              href="/"
            >
              <Image src={logo} alt="Tidal Sites" width="35" height="35" />
              <span
                aria-hidden
                className={`font-bold text-3xl hidden sm:block ${rubik.className}`}
              >
                TIDAL SITES
              </span>
            </Link>
          </div>
          <button
            aria-label="Mobile Navigation Button"
            aria-controls="mobile-menu"
            aria-expanded={dropdownActivated}
            className="md:hidden transition-all hover:bg-black hover:text-white duration-400 hover:outline-offset-2"
            onClick={activateDropdown}
          >
            <MdOutlineMenuOpen className="text-4xl" />
          </button>
          <nav aria-label="Primary Navigation" className="hidden md:block">
            <ul className="flex gap-4 flex-wrap justify-end">
              <li className="relative">
                <Link
                  className="transition-colors after:absolute after:bottom-0 after:left-[50%] after:w-0 after:h-[2px] after:bg-[--theme] after:transition-all hover:[text-shadow:_0_0px_8px_rgba(255,255,255,.5),0_0px_12px_rgba(0,200,255,.5)] hover:after:w-full hover:after:left-0"
                  href="/"
                >
                  HOME
                </Link>
              </li>
              <li className="relative">
                <Link
                  className="transition-colors after:absolute after:bottom-0 after:left-[50%] after:w-0 after:h-[2px] after:bg-[--theme] after:transition-all hover:[text-shadow:_0_0px_8px_rgba(255,255,255,.5),0_0px_12px_rgba(0,200,255,.5)] hover:after:w-full hover:after:left-0"
                  href="/about"
                >
                  ABOUT
                </Link>
              </li>
              <li className="relative">
                <Link
                  className="transition-colors after:absolute after:bottom-0 after:left-[50%] after:w-0 after:h-[2px] after:bg-[--theme] after:transition-all hover:[text-shadow:_0_0px_8px_rgba(255,255,255,.5),0_0px_12px_rgba(0,200,255,.5)] hover:after:w-full hover:after:left-0"
                  href="/services"
                >
                  SERVICES
                </Link>
              </li>
              <li className="relative">
                <Link
                  className="transition-colors after:absolute after:bottom-0 after:left-[50%] after:w-0 after:h-[2px] after:bg-[--theme] after:transition-all hover:[text-shadow:_0_0px_8px_rgba(255,255,255,.5),0_0px_12px_rgba(0,200,255,.5)] hover:after:w-full hover:after:left-0"
                  href="/portfolio"
                >
                  PORTFOLIO
                </Link>
              </li>
              <li className="relative">
                <Link
                  className="transition-colors after:absolute after:bottom-0 after:left-[50%] after:w-0 after:h-[2px] after:bg-[--theme] after:transition-all hover:[text-shadow:_0_0px_8px_rgba(255,255,255,.5),0_0px_12px_rgba(0,200,255,.5)] hover:after:w-full hover:after:left-0"
                  href="/blog"
                >
                  BLOG
                </Link>
              </li>
              <li className="relative">
                <Link
                  className="transition-colors after:absolute after:bottom-0 after:left-[50%] after:w-0 after:h-[2px] after:bg-[--theme] after:transition-all hover:[text-shadow:_0_0px_8px_rgba(255,255,255,.5),0_0px_12px_rgba(0,200,255,.5)] hover:after:w-full hover:after:left-0"
                  href="/contact"
                >
                  CONTACT
                </Link>
              </li>
            </ul>
          </nav>

          <div
            id="mobile-menu"
            className={`${
              dropdownActivated
                ? "translate-y-0 flex flex-col"
                : "translate-y-[-100vh] invisible"
            } fixed inset-0 -top-2 -left-2 justify-center bg-black/90 overflow-hidden z-50 transition-all duration-300 w-[100vw] h-[100vh] backdrop-filter backdrop-blur-[40px]`}
          >
            <button
              onClick={deactivateDropdown}
              aria-label="Close Mobile Menu"
              className=" bg-black/30 rounded-full shadow-md text-2xl absolute top-4 right-4 p-1"
            >
              <MdClose />
            </button>

            <ul className="flex flex-col content-center items-center min-w-[300px] mx-auto rounded-2xl overflow-hidden shadow-[0_0_20px_-10px_rgba(255,255,255,.25)] bg-black/90">
              <li className="w-full text-center border-b-[1px] border-[rgba(0,200,255,.25)]">
                <Link href="/">
                  <span
                    className="flex justify-center w-full h-full py-4"
                    onClick={deactivateDropdown}
                  >
                    HOME
                  </span>
                </Link>
              </li>
              <li className="w-full text-center border-b-[1px] border-[rgba(0,200,255,.25)]">
                <Link href="/about">
                  <span
                    className="flex justify-center w-full h-full py-4"
                    onClick={deactivateDropdown}
                  >
                    ABOUT
                  </span>
                </Link>
              </li>
              <li className="w-full text-center border-b-[1px] border-[rgba(0,200,255,.25)]">
                <Link href="/services">
                  <span
                    className="flex justify-center w-full h-full py-4"
                    onClick={deactivateDropdown}
                  >
                    SERVICES
                  </span>
                </Link>
              </li>
              <li className="w-full text-center border-b-[1px] border-[rgba(0,200,255,.25)]">
                <Link href="/portfolio">
                  <span
                    className="flex justify-center w-full h-full py-4"
                    onClick={deactivateDropdown}
                  >
                    PORTFOLIO
                  </span>
                </Link>
              </li>
              <li className="w-full text-center border-b-[1px] border-[rgba(0,200,255,.25)]">
                <Link href="/blog">
                  <span
                    className="flex justify-center w-full h-full py-4"
                    onClick={deactivateDropdown}
                  >
                    BLOG
                  </span>
                </Link>
              </li>
              <li className="w-full text-center">
                <Link href="/contact">
                  <span
                    className="flex justify-center w-full h-full py-4"
                    onClick={deactivateDropdown}
                  >
                    CONTACT
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* <button
          aria-label="Toggle Theme"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          className="rounded-full p-2 backdrop-filter backdrop-blur-[10px] shadow-[0_0_20px_-8px_rgba(255,255,255,.25)] w-fit"
        >
          {theme === "light" ? (
            <MdLightMode className="text-4xl" />
          ) : (
            <MdDarkMode className="text-4xl" />
          )}
        </button> */}
      </div>
    </header>
  );
};
