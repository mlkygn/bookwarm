import { Fragment, useState } from "react";
import logo from "../../assets/logo.png";
import "./header.css"

export default function Header() {

  return (
    <header className="bg-light">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-none">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img src={logo} width={200} alt="" />
          </a>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <div className="font-semibold font-poiret text-animate text-lg">
            Carry Your Library in Your Pocket!
          </div>
        </div>
      </nav>
    </header>
  );
}
