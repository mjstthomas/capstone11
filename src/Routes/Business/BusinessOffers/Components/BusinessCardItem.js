import React, { useContext } from "react";
import ProfilePic from "../../../../Components/Utilities/ProfilePic/ProfilePic";
import SmallButton from "../../../../Components/Utilities/SmallButton/SmallButton";
import AppContext from "../../../../AppContext";
import "./BusinessCard.css";

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
          imgSrc={props.freelancerURL}
          imgAlt={props.freelancerName}
        />
      </section>
      <section className="right-card">
        <p className="offer-date">{newDate}</p>
        <p className="offer-pay">Pay rate:{props.pay}/hr</p>
      </section>
      <section>
      <p className="offer-job-desc">{props.info}</p>
      <p className="offer-job-desc">{props.text}</p>
      </section>
      <section className="bottom-card">
      <p className="offer-rating">{props.rating}</p>
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
