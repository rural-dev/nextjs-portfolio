import Image from "next/image";
import React, { Component, Fragment } from "react";

class Header extends Component {
  render() {
    return (
        <nav className="flex flex-row flex-end py-8 px-20">
        <Image src="/logo.svg" alt="Logo" width={44} height={32}/>
        <ul className="flex flex-row rounded-md items-center h-16 bg-gradient-to-r from-bg1 to-transparent py-2 ml-8 pr-8">
          <li className="text-base font-semibold font-body text-violet pl-8">Home</li>
          <li className="text-base font-semibold font-body text-basic pl-8">Projects</li>
          <li className="text-base font-semibold font-body text-basic pl-8">About</li>
          <li className="text-base font-semibold font-body text-basic pl-8">Contact</li>
        </ul>
        <button className="ml-auto rounded-md text-violet border-2 border-violet text-base font-semibold font-body px-5">Download CV</button>
      </nav>
    );
  }
}

export default Header;