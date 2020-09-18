import React from "react";
import ProfilePic from "../Utilities/ProfilePic/ProfilePic";
import "./MessageBubble.css";

function MessageBubble(props) {
  return (
    <article className="bubble-container">
      <ProfilePic
        imgSrc="https://via.placeholder.com/60"
        imgAlt="profile picture"
      />
      <article className="inner-bubble">
        <section>{props.content}</section>
        <p>{props.time}</p>
      </article>
    </article>
  );
}
export default MessageBubble;
