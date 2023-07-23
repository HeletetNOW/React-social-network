import Style from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <div className={Style.logo}>
      <div className={Style.img}>
        <NavLink to="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
            alt=""
          />
        </NavLink>
        <div className={Style.login}>
          {props.isAuth ? props.logn : <NavLink to="/login">Login</NavLink>}
        </div>
      </div>
    </div>
  );
};

export default Header;
