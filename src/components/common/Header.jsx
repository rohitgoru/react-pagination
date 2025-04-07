"use client";
import React, { useEffect, useState } from "react";
import NavLink from "./NavLink";
import { navItems } from "./Helper";
import { LikeIcon, MenuIcon, ProfileIcon, SearchIcon, ShopIcon } from "./Icons";
import MobileSidebar from "./MobileSidebar";

const Header = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  useEffect(() => {
    document.body.style.overflow = isSidebarVisible ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isSidebarVisible]);

  const handleClick = () => {
    const aboutSection = document.getElementById("contact us");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error("Section not found!");
    }
  };

  return (
    <>
      <header className="bg-white shadow-sm">
        <div className="max-w-[1284px] mx-auto px-4 py-5 flex justify-between items-center gap-4">
          <img className="max-w-[100px] w-full" src="images/Logo.svg" alt="" />
          <ul className="hidden md:flex items-center gap-10">
            {navItems.map((item, index) => (
              <NavLink item={item} key={index} />
            ))}
          </ul>
          <div className="flex items-center gap-5">
            <button className="hidden sm:block">
              <ProfileIcon />
            </button>
            <button className="hidden sm:block">
              <SearchIcon />
            </button>
            <button className="hidden sm:block">
              <LikeIcon />
            </button>
            <button className="hidden sm:block">
              <ShopIcon />
            </button>
            <div>
              <button onClick={toggleSidebar} className="block md:hidden">
                <MenuIcon />
              </button>
            </div>
          </div>
        </div>
      </header>
      <MobileSidebar
        isSidebarVisible={isSidebarVisible}
        toggleSidebar={toggleSidebar}
      />
    </>
  );
};

export default Header;
