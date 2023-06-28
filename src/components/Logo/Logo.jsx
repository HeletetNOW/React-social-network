import Style from "./Logo.module.css";
import { NavLink } from "react-router-dom";

const Logo = () => {
  return (
    <div className={Style.logo}>
      <div className={Style.img}>
        <NavLink to="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
            alt=""
          />
        </NavLink>
      </div>
    </div>
  );
};

export default Logo;
