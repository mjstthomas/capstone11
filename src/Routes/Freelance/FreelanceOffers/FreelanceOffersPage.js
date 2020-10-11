import React, { useState, useContext, useEffect } from "react";
import Header from "../../../Components/Header/Header";
import AppContext from "../../../AppContext";
import "./FreelanceOffersPage.css";
import FreelancerCardItem from "./Components/FreelancerCardItem";
import ApiService from "../../../services/ApiService";

function FreelanceOffersPage(props) {
  const [myOffers, setOffers] = useState([]);
  const context = useContext(AppContext);
  const [error, setError] = useState("");

  useEffect(() => {
    ApiService.getFreelanceOffers()
      .then((result) => result.json())
      .then((result) => {
        if (result.error) {
          setOffers([]);
          return setError(result.error);
        }
        return setOffers(result);
      });
  }, []);

  const acceptOffer = (offerID, response) => {
    const newArray = [...myOffers];

    for (let i = 0; i < newArray; i++) {
      if (newArray[i].id === offerID) {
        newArray[i].response = response;
      }
    }

    setOffers(newArray);
  };
  const newOffers = myOffers.map((item) => (
    <FreelancerCardItem
      name={item.emp_name}
      dev_id={item.dev_id}
      src={item.image}
      offer_id={item.id}
      pay={item.payrate}
      info={item.offer_info}
      text={item.offer_detail}
      key={item.id}
      id={item.employer_id}
      acceptOffer={acceptOffer}
      response={item.response}
      history={props.history}
    />
  ));
  return (
    <main>
      <Header />
      <h1 className="offer-header">{context.user.nickname}'s Offers</h1>
      <h3>{error}</h3>
      <section className={newOffers.length !== 0 ? "offers-container" : ""}>
        {newOffers.length !== 0 ? (
          newOffers
        ) : (
          <h3 className="offer-default">No offers yet...</h3>
        )}
      </section>
    </main>
  );
}

export default FreelanceOffersPage;
