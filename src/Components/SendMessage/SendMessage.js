import React from "react";
import "./SendMessage.css";

function SendMessage() {
  return (
    <form id="send-message">
      <textarea className="message-textarea" col="25" rows="6" />
      <button className="message-btn" type="submit">
        <i className="fas fa-play"></i>
      </button>
    </form>
  );
}
export default SendMessage;
