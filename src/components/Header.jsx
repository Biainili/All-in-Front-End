"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`w-full pt-5 absolute padding_in_line ${poppins.className} z-20`}
    >
      <nav className="flex justify-between bg-black text-white p-8 rounded-[20px] custom_header relative">
        <Link href="/">
          <h1 className="text-lg">Allin</h1>
        </Link>
        {/* Кнопка для мобильного меню */}
        <button
          className="block lg:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            // Иконка крестика
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          ) : (
            // Иконка меню
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          )}
        </button>

        {/* Навигационное меню */}
        <ul
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } lg:flex flex-col lg:flex-row lg:max-w-[800px] lg:items-center lg:justify-between lg:static absolute top-20 left-0 w-full bg-black lg:bg-transparent lg:w-full rounded-b-[20px] nav_bar lg:p-0 p-4 custom_for_header_lg`}
        >
          <li className="lg:p-0 p-4 ">
            <Link href="https://demo-allin-app.netlify.app/#digital-services">
              Թվային ծառայություններ
            </Link>
          </li>
          <li className="lg:p-0 p-4">
            <Link href="https://demo-allin-app.netlify.app/#services">
              Ծառայություններ
            </Link>
          </li>
          <li className="lg:p-0 p-4">
            <Link href="https://demo-allin-app.netlify.app/#about-us">
              Մեր մասին
            </Link>
          </li>
          <li className="lg:p-0 p-4">
            <Link href="https://demo-allin-app.netlify.app/#contact">
              Կապվեք մեզ հետ
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
