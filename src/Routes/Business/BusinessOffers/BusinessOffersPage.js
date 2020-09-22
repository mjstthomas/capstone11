import React, {useContext} from "react";
import BusinessCardItem from "./Components/BusinessCardItem";
import Header from "../../../Components/Header/Header";
import AppContext from "../../../AppContext";

function BusinessOffersPage(props) {
  const context = useContext(AppContext);
  const myOffers = context.businessOffers.filter(
    (item) => item.businessID == context.user.id
  );

  const offers = myOffers.map(item =>{
    return <BusinessCardItem
              date="09/03/20"
              pay={item.pay}
              text={item.text}
              freelancerID={item.userID}
              businessID={item.businessID}
              history={props.history}
            />
  })

  return (
    <section className="business-offers-container">
      <Header />
      <arcticle className="myOffers-container">
        {offers}
      </arcticle>
    </section>
  );
}

export default BusinessOffersPage;
