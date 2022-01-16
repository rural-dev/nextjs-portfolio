import Image from "next/image";
import Link from "next/link";
import React, { Component, Fragment } from "react";

const Header = () => {
  const ScrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
  }
  const showMobileMenu = () => {
    const menu = document.querySelector(".mobile-menu");
    menu.classList.toggle("hidden");

  }
    return (
      <>
        <nav className="flex flex-row flex-end py-8 px-20">
        <div className="md:hidden flex mr-auto items-center">
        <button className="outline-none mobile-menu-button" onClick={showMobileMenu}>
          <svg
            className="w-6 h-6 text-gray-500"
            x-show="!showMenu"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="4"
            viewBox="0 0 24 24"
            stroke="#A93DE9"
          >
          <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
        </div>
        <div className="hidden lg:flex">
        <Image src="/logo.svg" alt="Logo" width={44} height={32}/>
        </div>
        <ul className="hidden lg:flex flex-row rounded-md items-center h-16 bg-gradient-to-r from-bg1 to-transparent py-2 ml-8 pr-8">
          <li className="text-base font-semibold font-body text-violet pl-8">
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li className="text-base font-semibold font-body text-basic pl-8">
            <Link href="/projects">
              <a>Projects</a>
            </Link>
          </li>
          <li onClick={ScrollToBottom}><button className="text-base font-semibold font-body text-basic pl-8"  >Contact</button></li>
          <li className="text-base font-semibold font-body text-basic pl-8">
            <Link href="/test">
              <a>About</a>
            </Link>
          </li>
        </ul>
        
        <button className="flex ml-auto rounded-md text-violet border-2 border-violet text-base font-semibold font-body px-5">Download CV</button>
        
      </nav>
      <div className="hidden mobile-menu">
      <ul>
        <li className="active">
        <Link href="/">
          <a className="block text-sm px-2 py-4 text-white bg-violet font-semibold">Home</a>
        </Link>
        </li>
        <li>
        <Link href="/projects">
              <a className="block text-sm px-2 py-4 hover:bg-violet transition duration-300">Projects</a>
            </Link></li>
        <li><a onClick={ScrollToBottom} class="block text-sm px-2 py-4 hover:bg-violet transition duration-300">Contact Us</a></li>
        <li>
        <Link href="/test">
              <a className="block text-sm px-2 py-4 hover:bg-violet transition duration-300">About</a>
            </Link></li>
      </ul>
    </div>
    </>
    );
  }


export default Header;