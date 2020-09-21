import React from "react";
import "./Cards.css";
import FreelancerCardItem from "./FreelancerCardItem";
import businessOffers from '../../businessOffersArray';

function FCards() {
  const offers = businessOffers.map(item=><FreelancerCardItem name={item.businessName} src={item.userImage} imgSrc="https://via.placeholder.com/60" rating={item.rating} pay={item.pay} text={item.text} key={item.businessID} id={item.businessID}/>)
  return (
    <div className="cards">
      <div className="cards-container">
        <div className="cards-wrapper">
          <ul className="cards-items">
            {offers}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FCards;
