import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import ProfilePic from "../Utilities/ProfilePic/ProfilePic";
import AppContext from "../../AppContext";

function Header() {
  const context = useContext(AppContext);
  return (
    <header>
      <Link to={context.user.profile ? "/Business" : "/Freelancer"}>
        <i className="fas fa-angle-double-right"></i>
        Switch to {context.user.profile ? "Business" : "Freelancing"}
      </Link>
      <h1 className="header-heading">DEV.IT</h1>
      <ProfilePic
        imgSrc="https://via.placeholder.com/85"
        imgAlt="profile picture"
      />
    </header>
  );
}
export default Header;
