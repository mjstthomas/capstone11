import React from "react";
import {useState, useContext} from "react";
import AppContext from '../../AppContext'
import { Link } from "react-router-dom";
import Modal from '../../Components/Utilities/Modal/Modal'

function BusinessCardItem(props) {
  const context = useContext(AppContext)
  const [modal, setModal] = useState(false);

  const minimize = () =>{
    if (modal){
      return setModal(false)
    }
    return null
  }

  const pushToMessage = () =>{
    props.history.push(`/Messaging/${context.user.id}/${props.businessID}`)
  }
  return (
    <>
      <li className="cards-item" onClick={minimize}>
        <section className="card-title-img-rating-container">
          <h1 className="cards-header cards-item-text">{props.name}</h1>
            <figure className="cards-item-pic-wrap">
              <img className="cards-item-img" alt="Profile Pic" src={props.src} />
            </figure>
            <h2 className="cards-item-text">Rating: {props.rating}</h2>
          </section>
          <section className="info-btn-container">
            <div className="cards-item-info">
              <h5 className="cards-item-text">Pay: {props.pay}</h5>
              <h5 className="cards-item-text">"{props.text}"</h5>
            </div>
            <article className="offer-btn-container">
              <Link to={`/Messaging/${context.user.id}/${props.businessID}`}><button className="message-business-btn">Message</button></Link>
              <button className="accept-offer-btn" onClick={()=> setModal(!modal)}>Accept Offer</button>
            </article>
          </section>
        {modal && <Modal id={props.id} minimize={()=> setModal(!modal)} />}
      </li>
    </>
  );
}

export default BusinessCardItem;
