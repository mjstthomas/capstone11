import React, { useState, useContext, useEffect } from "react";
import BusinessCardItem from "./Components/BusinessCardItem";
import Header from "../../../Components/Header/Header";
import AppContext from "../../../AppContext";
import ApiServices from '../../../services/ApiService';
import "./BusinessOffersPage.css";

function BusinessOffersPage(props) {
  const context = useContext(AppContext);

  const [myOffers, setOffers] = useState([]);

  useEffect(()=>{
     ApiServices.getBusinessOffers()
                      .then(result => result.json())
                      .then(result =>{
                        console.log(result)
                        return setOffers(result)
                  })
                }, [])

  const offers = myOffers.map((item) => {
    return (
      <BusinessCardItem
        date={item.date_created}
        rating={item.rating}
        image={item.image}
        pay={item.payrate}
        info={item.offer_info}
        text={item.offer_detail}
        response = {item.response}
        freelancerID={item.dev_id}
        businessID={item.employer_id}
        history={props.history}
        freelancerName={item.name}
        freelancerURL={item.url}
      />
    );
  });

  return (
    <main className="business-offers-container">
      <Header />
      <h1 className="offer-header">{context.user.nickname}'s Offers</h1>
      <section className="offers-container">{offers}</section>
    </main>
  );
}

export default BusinessOffersPage;
