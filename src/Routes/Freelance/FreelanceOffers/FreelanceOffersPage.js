import React, { useState, useContext } from "react";
import Header from "../../../Components/Header/Header";
import AppContext from "../../../AppContext";
import "./FreelanceOffersPage.css";
import FreelancerCardItem from "./Components/FreelancerCardItem";
import ApiService from '../../../services/ApiService';

function FreelanceOffersPage(props) {
  const [ myOffers, setOffers] = useState([])
  const context = useContext(AppContext);
  const offers = ApiService.getFreelanceOffers()
                      .then(result => result.json())
                      .then(result =>{
                        return setOffers(result)
                      })

const newOffers = myOffers.map((item) => (
                          <FreelancerCardItem
                            name={item.businessName}
                            src={item.userImage}
                            
                            pay={item.pay_rate}
                            info = {item.offer_info}
                            text={item.offer_detail}
                            key={item.businessID}
                            id={item.businessID}
                            history={props.history}
                          />
                          ))
  return (
    <main>
      <Header />
      <h1 className="offer-header">{context.user.nickname}'s Offers</h1>
      <section className="offers-container">{newOffers}</section>
    </main>
  );
}

export default FreelanceOffersPage;
