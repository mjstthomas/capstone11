import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import ProfilePic from "../Utilities/ProfilePic/ProfilePic";
import Nav from "./Nav";
import AppContext from "../../AppContext";
import TokenService from "../../services/TokenService";

function Header(props) {
  const context = useContext(AppContext);
  const userType = () => {
    if (
      (context.user.profile === true && context.headerToggle === false) ||
      (context.user.profile === false && context.headerToggle === true)
    ) {
      return "Freelancer";
    } else if (
      (context.user.profile === true && context.headerToggle === true) ||
      (context.user.profile === false && context.headerToggle === false)
    ) {
      return "Business";
    }
  };
  const handleLogout = () =>{
    TokenService.clearAuthToken()
  }
  return (
    <header>
      {TokenService.hasAuthToken() && (
        <Link to={`/${userType()}`} onClick={() => context.setHeaderToggle()}>
          <i className="fas fa-angle-double-right"></i>
          Switch to {userType()}
        </Link>
      )}
      <h1 className="header-heading">
        <Link to="/">DEV.IT</Link>
      </h1>
      {TokenService.hasAuthToken() && (
        <article
          className="header-profile-pic"
          onClick={() => context.setNav()}
        >
          <ProfilePic
            imgSrc="https://via.placeholder.com/85"
            imgAlt="profile picture"
          />
        </article>
      )}
      {context.isNav && <Nav />}
      <button onClick={handleLogout}>Log out</button>
    </header>
  );
}
export default Header;
