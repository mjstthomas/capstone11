import React from "react";
import { Link } from "react-router-dom";
import "./ProfilePic.css";

function ProfilePic(props) {
  return (
    <article>
      <img src={props.imgSrc} alt={props.imgAlt} />
    </article>
  );
}
export default ProfilePic;
