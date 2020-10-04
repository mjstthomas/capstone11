import React, { useState } from "react";
import "./SendMessage.css";
import ApiService from "../../services/ApiService";

function SendMessage({ receiver_id }) {
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    const preppedMessage = {
      receiver_id,
      message,
    };
    ApiService.postMessage(preppedMessage);
    setMessage("");
  };
  return (
    <footer>
      <form
        id="send-message"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <textarea
          autoFocus
          className="message-textarea"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          col="25"
          rows="6"
        />
        <button
          className="message-btn"
          type="submit"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <i className="fas fa-play"></i>
        </button>
      </form>
    </footer>
  );
}
export default SendMessage;
