import React from "react";
import Header from "../../Components/Header/Header";
import SendMessage from "../../Components/SendMessage/SendMessage";
import "./Messaging.css";

function Messaging() {
  return (
    <main>
      <Header />
      <section className="message-container"></section>
      <SendMessage />
    </main>
  );
}
export default Messaging;
