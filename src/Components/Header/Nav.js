import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "../../AppContext";
import TokenService from "../../services/TokenService";
import "./Nav.css";

function Nav() {
  const context = useContext(AppContext);

  const navUserType = () => {
    if (
      (context.userProfile.profile === true &&
        context.headerToggle === false) ||
      (context.userProfile.profile === false && context.headerToggle === true)
    ) {
      return "Freelancer";
    } else if (
      (context.userProfile.profile === true && context.headerToggle === true) ||
      (context.userProfile.profile === false && context.headerToggle === false)
    ) {
      return "Business";
    }
  };
  return (
    <nav>
      <i className="fas fa-times" onClick={() => context.setNav()}></i>
      <Link onClick={() => context.setNav()} to={`/${navUserType()}`}>
        Dashboard
      </Link>
      <Link
        onClick={() => context.setNav()}
        to={`/${navUserType()}/Profile/${context.user.user_id}`}
      >
        Profile
      </Link>
      <Link
        to="/"
        onClick={() => {
          TokenService.clearAuthToken();
          context.setNav();
        }}
      >
        Log Out
      </Link>
    </nav>
  );
}
export default Nav;
