import React from "react";
import "./ProfilePic.css";

function ProfilePic(props) {
  return (
    <article>
      <img src={props.imgSrc} alt={props.imgAlt} />
    </article>
  );
}
export default ProfilePic;
