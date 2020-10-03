import React from "react";
import ProfilePic from "../Utilities/ProfilePic/ProfilePic";
import "./MessageBubble.css";

function MessageBubble(props) {
  const date = new Date(props.time).toDateString();
  const time = new Date(props.time).toTimeString();
  return (
    <article className="bubble-container">
      <ProfilePic imgSrc={props.image} imgAlt={props.name} />
      <article className="inner-bubble">
        <section>{props.content}</section>
        <p className="time-stamp">{`${date} ${time}`}</p>
      </article>
    </article>
  );
}
export default MessageBubble;
