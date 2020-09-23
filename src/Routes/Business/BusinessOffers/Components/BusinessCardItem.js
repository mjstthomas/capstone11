import React, { useContext } from "react";
import ProfilePic from "../../../../Components/Utilities/ProfilePic/ProfilePic";
import SmallButton from "../../../../Components/Utilities/SmallButton/SmallButton";
import AppContext from "../../../../AppContext";
import "./BusinessCard.css";

function BusinessCardItem(props) {
  const context = useContext(AppContext);
  return (
    <article className="offer-item">
      <h2 className="offer-name">{props.freelancerName}</h2>
      <section className="left-card">
        <ProfilePic
          className="offer-pic"
          imgSrc={props.freelancerURL}
          imgAlt={props.freelancerName}
        />
      </section>
      <section className="right-card">
        <p className="offer-date">{props.date}</p>
        <p className="offer-pay">Pay rate:{props.pay}</p>
      </section>
      <p className="offer-job-desc">{props.text}</p>
      <section className="bottom-card">
        <p className="offer-rating">Rating {props.rating}</p>
        <SmallButton
          className="btn"
          id="cards-message"
          buttonStyle="btn-outline"
          buttonSize="btn-large"
          type="button"
          onClick={() =>
            props.history.push(
              `/Messaging/${context.user.id}/${props.freelancerID}`
            )
          }
        >
          <i className="fas fa-comments"></i>
        </SmallButton>
      </section>
    </article>
  );
}

export default BusinessCardItem;
