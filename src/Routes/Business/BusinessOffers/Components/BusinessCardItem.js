import React, { useContext } from "react";
import ProfilePic from "../../../../Components/Utilities/ProfilePic/ProfilePic";
import SmallButton from "../../../../Components/Utilities/SmallButton/SmallButton";
import AppContext from "../../../../AppContext";

function BusinessCardItem(props) {
  const context = useContext(AppContext);
  return (
    <article className="offer-item">
      <ProfilePic imgSrc={props.src} imgAlt={props.name} />
      <h2 className="offer-name">{props.name}</h2>
      <p className="offer-rating">{props.rating}</p>
      <p className="offer-date">{props.date}</p>
      <p className="offer-pay">Pay rate:{props.pay}</p>
      <p className="offer-job-desc">{props.text}</p>
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
    </article>
  );
}

export default BusinessCardItem;
