import { NavLink } from "react-router-dom";
import Style from "./NavBar.module.css";
const NavBar = () => {
  return (
    <div className={Style.nav}>
      <div className={Style.inner}>
        <NavLink className={Style.link} to="/profile">
          Profile
        </NavLink>
        <NavLink className={Style.link} to="/messages">
          Messages
        </NavLink>
        <NavLink className={Style.link} to="/users">
          Users
        </NavLink>
        <NavLink className={Style.link} to="/news">
          News
        </NavLink>
        <NavLink className={Style.link} to="/music">
          Music
        </NavLink>
        <NavLink className={Style.link} to="/settings">
          Settings
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
