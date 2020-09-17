import React from "react";
import "./Cards.css";
import FreelancerCardItem from "./FreelancerCardItem";

function FCards() {
  return (
    <div className="cards">
      <h1>Check out these offers!</h1>
      <div className="cards-container">
        <div className="cards-wrapper">
          <ul className="cards-items">
            <FreelancerCardItem
              src="https://via.placeholder.com/85"
              name="Amy"
              rating="9"
              pay="$19/hr"
              text="I code well."
              path="/services"
              imgSrc="https://via.placeholder.com/60"
            />
            <FreelancerCardItem
              src="https://via.placeholder.com/85"
              name="Amy"
              rating="9"
              pay="$19/hr"
              text="I code well."
              path="/services"
              imgSrc="https://via.placeholder.com/60"
            />
            <FreelancerCardItem
              src="https://via.placeholder.com/85"
              name="Amy"
              rating="9"
              pay="$19/hr"
              text="I code well."
              path="/services"
              imgSrc="https://via.placeholder.com/60"
            />
            <FreelancerCardItem
              src="https://via.placeholder.com/85"
              name="Amy"
              rating="9"
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

export default FCards;
