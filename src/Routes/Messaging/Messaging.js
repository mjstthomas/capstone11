import React, { useEffect, useState } from "react";
import Header from "../../Components/Header/Header";
import MessageBubble from "../../Components/MessageBubble/MessageBubble";
import SendMessage from "../../Components/SendMessage/SendMessage";
import "./Messaging.css";

function Messaging() {
  const [messages, setMessages] = useState([
    {
      time: "12:00",
      sender: 1,
      recepient: 2,
      content: "A message about stuff",
    },
  ]);

  useEffect(() => {
    // fetch and setMessages
  }, []);

  const messageBubbles = messages.map((message) => (
    <MessageBubble
      sender={message.sender}
      content={message.content}
      time={message.time}
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
