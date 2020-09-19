import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./ProfilePic.css";
import AppContext from "../../../AppContext";

function ProfilePic(props) {
  const context = useContext(AppContext);
  return (
    <article className="profile-pic">
      <Link
        to={
          context.user.profile
            ? `/Freelancer/Profile/${context.user.id}`
            : `/Business/Profile/${context.user.id}`
        }
      >
        <img src={props.imgSrc} alt={props.imgAlt} />
      </Link>
    </article>
  );
}
export default ProfilePic;
