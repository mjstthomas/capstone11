import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../Components/Header/Header";
import MessageBubble from "../../Components/MessageBubble/MessageBubble";
import SendMessage from "../../Components/SendMessage/SendMessage";
import ApiService from "../../services/ApiService";
import "./Messaging.css";

function Messaging() {
  const [filteredMessages, setMessages] = useState([]);
  const { senderID, recipientID } = useParams();

  useEffect(() => {
    ApiService.getMessages().then((messages) => {
      console.log({ messages });
      const filteredBySender = messages.filter(
        (message) => message.sender_id === (recipientID || senderID)
      );
      console.log({ filteredBySender });
      setMessages(filteredBySender);
    });
  }, []);

  const messageBubbles = filteredMessages.map((message, index) => (
    <MessageBubble
      key={index}
      sender={message.sender_id}
      image={message.image}
      content={message.message}
      time={message.date_created}
    />
  ));

  return (
    <main>
      <Header />
      <section className="message-container">{messageBubbles}</section>
      <SendMessage receiver_id={recipientID} />
    </main>
  );
}
export default Messaging;
