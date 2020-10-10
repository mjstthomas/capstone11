import React, { useContext } from "react";
import ProfilePic from "../../../../Components/Utilities/ProfilePic/ProfilePic";
import SmallButton from "../../../../Components/Utilities/SmallButton/SmallButton";
import AppContext from "../../../../AppContext";
import "./BusinessCard.css";
import ApiService from "../../../../services/ApiService";

function BusinessCardItem(props) {
  const context = useContext(AppContext);
  const date = new Date(props.date);

  const newDate = `${date}`.substr(0, 15);
  return (
    <article className="offer-item">
      <h2 className="offer-name">{props.freelancerName}</h2>
      <section className="left-card">
        <ProfilePic
          className="offer-pic"
          imgSrc={props.image}
          imgAlt={props.freelancerName}
        />
      </section>
      <section className="right-card">
        <p className="offer-date">{newDate}</p>
        <p className="offer-pay">Pay rate: ${props.pay}/hr</p>
      </section>
      <section className="middle-card">
        <p className="offer-job-desc">{props.info}</p>
        <br />
        <p className="offer-job-desc">Details: {props.text}</p>
      </section>
      <section className="bottom-card">
        {props.response.length > 1 ? (
          props.response === "Accepted" ? (
            <p className="offer-green">{props.response}</p>
          ) : (
            <p className="offer-red">{props.response}</p>
          )
        ) : null}
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
        <SmallButton
          className="btn"
          id="cards-message"
          buttonStyle="btn-outline"
          buttonSize="btn-large"
          type="button"
          onClick={() => {
            const newOffers = props.myOffers.filter(item => props.offerID !== item.id)
            ApiService.deleteOffer(props.offerID)
            props.setOffers(newOffers);
          }}
        >
          <i className="fas fa-trash-alt"></i>
        </SmallButton>
      </section>
    </article>
  );
}

export default BusinessCardItem;
