import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "../../AppContext";
import TokenService from "../../services/TokenService";
import "./Nav.css";

function Nav() {
  const context = useContext(AppContext);
  const isItAFL = TokenService.getProfileToken();

  const navUserType = () => {
    if (isItAFL === "true") {
      return "Freelancer";
    } else {
      return "Business";
    }
  };

  const UserType = navUserType();

  return (
    <nav>
      <i className="fas fa-times" onClick={() => context.setNav()}></i>
      <Link onClick={() => context.setNav()} to={`/${navUserType()}`}>
        Dashboard
      </Link>
      <Link
        onClick={() => context.setNav()}
        to={`/${UserType}/Profile/${TokenService.getIdToken()}`}
      >
        Profile
      </Link>
      <Link
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
