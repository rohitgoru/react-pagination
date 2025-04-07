import React from "react";

const NavLink = ({ item, onClick }) => {
  return (
    <li className="nav-link">
      <a onClick={onClick} href={item.to}>
        {item.label}
      </a>
    </li>
  );
};

export default NavLink;
