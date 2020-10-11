import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "../../AppContext";
import TokenService from "../../services/TokenService";
import "./Nav.css";

function Nav() {
  const context = useContext(AppContext);

  const navUserType = () => {
    if (
      (TokenService.getProfileToken() === "false" &&
        context.headerToggle === true) ||
      (TokenService.getProfileToken() === "true" &&
        context.headerToggle === false)
    ) {
      return "Freelancer";
    } else if (
      (TokenService.getProfileToken() === "false" &&
        context.headerToggle === false) ||
      (TokenService.getProfileToken() === "true" &&
        context.headerToggle === true)
    ) {
      return "Business";
    }
  };

  const UserType = navUserType();

  return (
    <nav>
      <i className="nav fas fa-times" onClick={() => context.setNav()}></i>
      <Link
        className="nav"
        onClick={() => context.setNav()}
        to={`/${navUserType()}`}
      >
        Dashboard
      </Link>
      <Link
        className="nav"
        onClick={() => context.setNav()}
        to={`/${UserType}/Profile/${TokenService.getIdToken()}`}
      >
        Profile
      </Link>
      <Link
        className="nav"
        to="/"
        onClick={() => {
          TokenService.clearAuthToken();
          TokenService.clearIdToken();
          TokenService.clearProfileToken();
          context.setNav();
        }}
      >
        Log Out
      </Link>
    </nav>
  );
}
export default Nav;
