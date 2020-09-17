import React from "react";
import { Link } from "react-router-dom";

function BusinessCardItem(props) {
  return (
    <>
      <li className="cards-item">
        <Link className="cards-item-link" to={props.path}>
          <figure className="cards-item-pic-wrap">
            <img
              className="cards-item-img"
              alt="Profile Image"
              src={props.src}
            />
          </figure>
          <div className="cards-item-info">
            <h2 className="cards-item-text">{props.name}</h2>
            <h2 className="cards-item-text">{props.rating}</h2>
            <h5 className="cards-item-text">{props.pay}</h5>
            <h5 className="cards-item-text">{props.text}</h5>
          </div>
          <Link ClassName="message-bubble" to={props.path}>
            <img
              className="cards-item-message"
              alt="Message Bubble"
              src={props.imgSrc}
            />
          </Link>
          <Link className="offer-bubble" type="submit">
            Accept Offer
          </Link>
        </Link>
      </li>
    </>
  );
}

export default BusinessCardItem;
