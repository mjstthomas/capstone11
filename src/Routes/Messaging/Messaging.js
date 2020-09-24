import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../Components/Header/Header";
import MessageBubble from "../../Components/MessageBubble/MessageBubble";
import SendMessage from "../../Components/SendMessage/SendMessage";
import ApiService from "../../services/ApiService";
import "./Messaging.css";

function Messaging() {
  const [filteredMessages, setMessages] = useState([]);
  const { recipientID } = useParams();
  ApiService.getMessages().then((messages) => {
    console.log({ messages });
    messages.filter(
      (message) =>
        message.sender_id === recipientID || message.receiver_id === recipientID
    );
    setMessages(messages);
  });

  useEffect(() => {
    // fetch and setMessages
  }, []);

  const messageBubbles = filteredMessages.map((message) => (
    <MessageBubble
      sender={message.sender_id}
      content={message.message}
      time={message.date_created}
    />
  ));

  return (
    <main>
      <Header />
      <section className="message-container">{messageBubbles}</section>
      <SendMessage />
    </main>
  );
}
export default Messaging;
