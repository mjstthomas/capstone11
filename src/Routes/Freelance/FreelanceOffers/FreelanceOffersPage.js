import React, { useContext } from "react";
import Header from "../../../Components/Header/Header";
import AppContext from "../../../AppContext";
import "./FreelanceOffersPage.css";
import FreelancerCardItem from "./Components/FreelancerCardItem";

function FreelanceOffersPage(props) {
  const context = useContext(AppContext);
  const myOffers = context.businessOffers.filter(
    (item) => item.userID == context.user.id
  );
  const offers = myOffers.map((item) => (
    <FreelancerCardItem
      name={item.businessName}
      src={item.userImage}
      rating={item.rating}
      pay={item.pay}
      text={item.text}
      key={item.businessID}
      id={item.businessID}
      history={props.history}
    />
  ));
  return (
    <main>
      <Header />
      <h1 className="offer-header">{context.user.nickname}'s Offers</h1>
      <section className="offers-container">{offers}</section>
    </main>
  );
}

export default FreelanceOffersPage;
