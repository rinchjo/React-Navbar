import React, { useState } from "react";
import { MenuItems } from "./MenuItems";
import "./Navbar.css";
import { Button } from "../Button";
const NavBar = () => {
  const [disabled, setDisabled] = useState(false);
  const [nav, setNavbar] = useState(false);

  const pressIcon = () => {
    setDisabled(!disabled);
    setNavbar(!nav);
  };
  return (
    <div>
      <nav className="NavbarItems">
        <h1 className="navbar-logo">
          Atom<i className="fab fa-react"></i>
        </h1>
        <div onClick={pressIcon} className="menu-icon">
          <i
            className={disabled ? "fa-solid fa-times" : "fa-solid fa-bars"}
          ></i>
        </div>
        <ul className={nav ? "nav-menu-active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>

        <Button>Sign up</Button>
      </nav>
    </div>
  );
};
export default NavBar;
