import React from "react";
import "./Cards.css";
import BusinessCardItem from "./BusinessCardItem";

function BCards() {
  return (
    <div className="cards">
      <h1>Check out these offers!</h1>
      <div className="cards-container">
        <div className="cards-wrapper">
          <ul className="cards-items">
            <BusinessCardItem
              src="https://via.placeholder.com/85"
              name="Amy"
              rating="9"
              date="09/03/20"
              pay="$19/hr"
              text="I code well."
              path="/services"
              imgSrc="https://via.placeholder.com/60"
            />
            <BusinessCardItem
              src="https://via.placeholder.com/85"
              name="Amy"
              rating="9"
              date="09/03/20"
              pay="$19/hr"
              text="I code well."
              path="/services"
              imgSrc="https://via.placeholder.com/60"
            />
            <BusinessCardItem
              src="https://via.placeholder.com/85"
              name="Amy"
              rating="9"
              date="09/03/20"
              pay="$19/hr"
              text="I code well."
              path="/services"
              imgSrc="https://via.placeholder.com/60"
            />
            <BusinessCardItem
              src="https://via.placeholder.com/85"
              name="Amy"
              rating="9"
              date="09/03/20"
              pay="$19/hr"
              text="I code well."
              path="/services"
              imgSrc="https://via.placeholder.com/60"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default BCards;
