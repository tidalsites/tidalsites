"use client";

import { FC, useState, useEffect } from "react";
import { Rubik } from "next/font/google";
import Link from "next/link";
import logo from "@/public/assets/logos/logo.svg";
import Image from "next/image";
import { MdOutlineMenuOpen, MdClose } from "react-icons/md";

const rubik = Rubik({ subsets: ["latin"] });

export const Header: FC = () => {
  const [dropdownActivated, setDropdownActivated] = useState<boolean>(false);

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
    <header className="w-[100vw] fixed top-0 z-10 bg-white">
      <div className="max-w-page mx-auto flex justify-between px-4 items-center h-navbar">
        <div className="py-3">
          <Link className="flex gap-2 relative text-gray-800 py-1" href="/">
            <Image src={logo} alt="Tidal Sites" width="35" height="35" />
            <span
              aria-hidden
              className={`font-bold text-3xl text-[--black] ${rubik.className}`}
            >
              TIDAL SITES
            </span>
          </Link>
        </div>
        <button
          className="md:hidden outline outline-black outline-2 p-1 transition-all hover:bg-black hover:text-white duration-400 hover:outline-offset-2"
          onClick={activateDropdown}
        >
          <MdOutlineMenuOpen className="text-4xl" />
        </button>
        <nav aria-label="Primary Navigation" className="hidden md:block">
          <ul className="flex gap-4 flex-wrap justify-end">
            <li className="relative">
              <Link
                className="transition-colors after:absolute after:bottom-0 after:left-[50%] after:w-0 after:h-[2px] after:bg-purple-800 after:transition-all hover:text-purple-800 hover:after:w-full hover:after:left-0"
                href="/"
              >
                HOME
              </Link>
            </li>
            <li className="relative">
              <Link
                className="transition-colors after:absolute after:bottom-0 after:left-[50%] after:w-0 after:h-[2px] after:bg-purple-800 after:transition-all hover:text-purple-800 hover:after:w-full hover:after:left-0"
                href="/about"
              >
                ABOUT
              </Link>
            </li>
            <li className="relative">
              <Link
                className="transition-colors after:absolute after:bottom-0 after:left-[50%] after:w-0 after:h-[2px] after:bg-purple-800 after:transition-all hover:text-purple-800 hover:after:w-full hover:after:left-0"
                href="/services"
              >
                SERVICES
              </Link>
            </li>
            <li className="relative">
              <Link
                className="transition-colors after:absolute after:bottom-0 after:left-[50%] after:w-0 after:h-[2px] after:bg-purple-800 after:transition-all hover:text-purple-800 hover:after:w-full hover:after:left-0"
                href="/portfolio"
              >
                PORTFOLIO
              </Link>
            </li>
          </ul>
        </nav>
        <div
          className={`${
            dropdownActivated
              ? "translate-y-0 opacity-100 flex flex-col"
              : "hidden translate-y-[-100vh]"
          } fixed inset-0 justify-center bg-black/80 overflow-hidden z-50 transition-all`}
        >
          <button className="text-red-400 bg-white rounded-full shadow-md text-4xl absolute top-4 right-4 p-1">
            <MdClose onClick={deactivateDropdown} />
          </button>

          <ul className="flex flex-col content-center items-center min-w-[300px] bg-white w-fit mx-auto rounded">
            <li className="w-full text-center border-b-[1px] border-black">
              <Link href="/">
                <span
                  className="flex justify-center w-full h-full py-4"
                  onClick={deactivateDropdown}
                >
                  HOME
                </span>
              </Link>
            </li>
            <li className="w-full text-center border-b-[1px] border-black">
              <Link href="/about">
                <span
                  className="flex justify-center w-full h-full py-4"
                  onClick={deactivateDropdown}
                >
                  ABOUT
                </span>
              </Link>
            </li>
            <li className="w-full text-center border-b-[1px] border-black">
              <Link href="/services">
                <span
                  className="flex justify-center w-full h-full py-4"
                  onClick={deactivateDropdown}
                >
                  SERVICES
                </span>
              </Link>
            </li>
            <li className="w-full text-center">
              <Link href="/portfolio">
                <span
                  className="flex justify-center w-full h-full py-4"
                  onClick={deactivateDropdown}
                >
                  PORTFOLIO
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
