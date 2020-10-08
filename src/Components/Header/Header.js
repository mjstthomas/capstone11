import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import ProfilePic from "../Utilities/ProfilePic/ProfilePic";
import Nav from "./Nav";
import AppContext from "../../AppContext";
import TokenService from "../../services/TokenService";

function Header(props) {
  const context = useContext(AppContext);
  const location = useLocation();
  const userType = () => {
    if (
      (context.userProfile.profile === true && context.headerToggle === true) ||
      (context.userProfile.profile === false && context.headerToggle === false)
    ) {
      return "Freelancer";
    } else if (
      (context.userProfile.profile === true &&
        context.headerToggle === false) ||
      (context.userProfile.profile === false && context.headerToggle === true)
    ) {
      return "Business";
    }
  };
  return (
    <header>
      {location.pathname === "/SignUp/FLDetails" ||
      location.pathname === "/SignUp/BizDetails"
        ? null
        : TokenService.hasAuthToken() && (
            <Link
              to={`/${userType()}`}
              onClick={() => context.setHeaderToggle()}
            >
              <i className="fas fa-angle-double-right"></i>
              Switch to {userType()}
            </Link>
          )}
      <h1 className="header-heading">
        <Link to="/">DEV.IT</Link>
      </h1>
      {location.pathname === "/SignUp/FLDetails" ||
      location.pathname === "/SignUp/BizDetails"
        ? null
        : TokenService.hasAuthToken() && (
            <article
              className="header-menu-icon"
              onClick={() => context.setNav()}
            >
              <i className="fas fa-bars"></i>
            </article>
          )}
      {context.isNav && <Nav userType={userType} />}
    </header>
  );
}
export default Header;
