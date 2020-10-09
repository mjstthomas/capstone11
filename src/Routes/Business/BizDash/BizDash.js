import React from "react";
import LargeButton from "../../../Components/Utilities/LargeButton/LargeButton";
import { useContext } from "react";
import AppContext from "../../../AppContext";
import Header from "../../../Components/Header/Header";
import "./BizDash.css";

export default function BizDash(props) {
  const context = useContext(AppContext);

  return (
    <section className="business-dash-container">
      <Header />
      <h2>{context.user.nickname}'s Dashboard</h2>
      <article className="BD-btn-container">
        <LargeButton
          name="Look For a Freelancer"
          onClick={() => props.history.push("/Business/Search")}
        />
      </article>
      <article className="BD-btn-container">
        <LargeButton
          name="Your Offers"
          onClick={() => props.history.push("/Business/BusinessOffersPage")}
        />
      </article>
    </section>
  );
}
