import React, { useState, useContext, useEffect } from "react";
import Header from "../../../Components/Header/Header";
import AppContext from "../../../AppContext";
import "./FreelanceOffersPage.css";
import FreelancerCardItem from "./Components/FreelancerCardItem";
import ApiService from '../../../services/ApiService';

function FreelanceOffersPage(props) {
  const [ myOffers, setOffers] = useState([])
  const context = useContext(AppContext);
  useEffect(()=>{
    ApiService.getFreelanceOffers()
                      .then(result => result.json())
                      .then(result =>{
                        if (result.length < 1){
                          return setOffers([]);
                        }
                        console.log(result)
                        return setOffers(result)
                      })
  }, []) ;

const newOffers = myOffers.map((item) => (
                          <FreelancerCardItem
                            name={item.businessName}
                            dev_id={item.dev_id}
                            src={item.userImage}
                            offer_id={item.id}
                            pay={item.payrate}
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
