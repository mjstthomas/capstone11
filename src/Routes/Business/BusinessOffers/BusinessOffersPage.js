import React, { useContext } from "react";
import BusinessCardItem from "./Components/BusinessCardItem";
import Header from "../../../Components/Header/Header";
import AppContext from "../../../AppContext";
import "./BusinessOffersPage.css";

function BusinessOffersPage(props) {
  const context = useContext(AppContext);

  const myOffers = [
    {
      url: "https://via.placeholder.com/85",
      name: "Amy",
      rating: "9",
      date: "09/03/20",
      pay: "$19/hr",
      text:
        "I code well. I code well. I code well. I code well. I code well. I code well.",
      userID: 1,
      businessID: 1,
    },
    {
      url: "https://via.placeholder.com/85",
      name: "Mai",
      rating: "9",
      date: "09/03/20",
      pay: "$19/hr",
      text: "I code well.",
      userID: 2,
      businessID: 1,
    },
    {
      url: "https://via.placeholder.com/85",
      name: "Jay",
      rating: "9",
      date: "09/03/20",
      pay: "$19/hr",
      text: "I code well.",
      userID: 3,
      businessID: 1,
    },
    {
      url: "https://via.placeholder.com/85",
      name: "Thomas",
      rating: "9",
      date: "09/03/20",
      pay: "$19/hr",
      text: "I code well.",
      userID: 4,
      businessID: 1,
    },
  ];

  const offers = myOffers.map((item) => {
    return (
      <BusinessCardItem
        date={item.date}
        rating={item.rating}
        pay={item.pay}
        text={item.text}
        freelancerID={item.userID}
        businessID={item.businessID}
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
