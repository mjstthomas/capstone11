import React from "react";
import { useState, useContext } from "react";
import AppContext from "../../../../AppContext";
import "./Cards.css";
import Modal from "../../../../Components/Utilities/Modal/Modal";
import ProfilePic from "../../../../Components/Utilities/ProfilePic/ProfilePic";
import SmallButton from "../../../../Components/Utilities/SmallButton/SmallButton";

function BusinessCardItem(props) {
  const context = useContext(AppContext);
  const [modal, setModal] = useState(false);

  const minimize = () => {
    if (modal) {
      return setModal(false);
    }
    return null;
  };

  return (
    <article className="cards-item" onClick={minimize}>
      <h2 className="cards-header">{props.name}</h2>
      <ProfilePic className="cards-pic" imgSrc={props.src} alt={props.name} />
      <section className="fl-right">
        <p className="cards-pay">Pay rate: {props.pay}/hr</p>
        <section>
          <p className="cards-job-desc">"{props.info}"</p>
          <p className="cards-job-desc">"{props.text}"</p>
        </section>
      </section>
      <section className="fl-bottom">
        <SmallButton
          className="btn"
          id="cards-message"
          buttonStyle="btn-outline"
          buttonSize="btn-large"
          type="button"
          onClick={() =>
            props.history.push(`/Messaging/${context.user.id}/${props.id}`)
          }
        >
          <i className="fas fa-comments"></i>
        </SmallButton>
        <SmallButton
          className="btn"
          id="cards-accept"
          buttonStyle="btn-outline"
          buttonSize="btn-large"
          type="button"
          onClick={() => setModal(!modal)}
        >
          Accept Offer
        </SmallButton>
      </section>
      {modal && (
        <Modal
          id={props.offer_id}
          payrate={props.pay}
          dev_id={props.dev_id}
          offer_detail={props.text}
          offer_info={props.info}
          minimize={() => setModal(!modal)}
        />
      )}
    </article>
  );
}

export default BusinessCardItem;
