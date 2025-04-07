import { navItems } from "./Helper";
import {
  CrossIcon,
  LikeIcon,
  MobileLogoIcon,
  ProfileIcon,
  SearchIcon,
  ShopIcon,
} from "./Icons";
import NavLink from "./NavLink";

const MobileSidebar = ({ isSidebarVisible, toggleSidebar }) => {
  const handleClick = () => {
    const aboutSection = document.getElementById("contact us");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error("Section not found!");
    }
    toggleSidebar();
  };

  return (
    <>
      {/* Overlay */}
      {isSidebarVisible && (
        <div
          className="fixed inset-0 bg-black/70 z-40"
          onClick={toggleSidebar}
          aria-label="Close Sidebar"
        ></div>
      )}
      <aside
        className={`bg-white w-full max-w-[390px] fixed lg:hidden flex flex-col justify-between items-start transition-transform duration-300 ease-in-out transform z-50 top-0 h-full p-4 ${
          isSidebarVisible ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="w-full">
          <div className="flex justify-between w-full items-center">
            <img
              className="max-w-[100px] w-full"
              src="images/Logo.svg"
              alt=""
            />
            <button
              onClick={toggleSidebar}
              aria-label="Close Sidebar"
              className="lg:hidden"
            >
              <CrossIcon />
            </button>
          </div>
          <ul className="flex flex-col items-start gap-5 sm:gap-7 mt-14">
            {navItems.map((item, index) => (
              <NavLink item={item} key={index} onClick={toggleSidebar} />
            ))}
          </ul>
        </div>
        <div className="flex items-center gap-5">
          <button className="">
            <ProfileIcon />
          </button>
          <button className="">
            <SearchIcon />
          </button>
          <button className="">
            <LikeIcon />
          </button>
          <button className="">
            <ShopIcon />
          </button>
        </div>
      </aside>
    </>
  );
};

export default MobileSidebar;
