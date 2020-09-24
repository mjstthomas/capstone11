import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "../../AppContext";
import TokenService from "../../services/TokenService";
import "./Nav.css";

function Nav() {
  const context = useContext(AppContext);
  return (
    <nav>
      <i class="fas fa-times" onClick={() => context.setNav()}></i>
      <Link
        to={
          context.user.profile
            ? `/Freelancer/Profile/${context.user.id}`
            : `/Business/Profile/${context.user.id}`
        }
      >
        Profile
      </Link>
      <Link to="/" onClick={() => TokenService.clearAuthToken()}>
        Log Out
      </Link>
    </nav>
  );
}
export default Nav;
