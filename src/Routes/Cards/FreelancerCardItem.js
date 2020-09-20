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
          <figure className="cards-item-pic-wrap">
            <img className="cards-item-img" alt="Profile Pic" src={props.src} />
          </figure>
          <div className="cards-item-info">
            <h2 className="cards-header cards-item-text">{props.name}</h2>
            <h2 className="cards-item-text">Rating: {props.rating}</h2>
            <h5 className="cards-item-text">Pay: {props.pay}</h5>
            <h5 className="cards-item-text">"{props.text}"</h5>
          </div>
          <article className="offer-btn-container">
            <button className="accept-offer-btn" onClick={()=> setModal(!modal)}>Accept Offer</button>
            <Link to={`/Messaging/${context.user.id}/${props.businessID}`}><button className="message-business-btn">Message</button></Link>
          </article>
        {modal && <Modal id={props.id} minimize={()=> setModal(!modal)} />}
      </li>
    </>
  );
}

export default BusinessCardItem;
