import React from "react";
import "../App.css";
import "./LandingPage.css";
import { SmallButton } from "../Components/Utilities/SmallButton/SmallButton";

function LandingPage() {
  return (
    <div className="landing-container">
      <h1>DEV.IT</h1>
      <div className="landing-btns">
        <SmallButton
          className="btns"
          buttonStyle="btn-outline"
          buttonSize="btn-large"
          type="submit"
        >
          BECOME A FREELANCER
        </SmallButton>
        <SmallButton
          className="btns"
          buttonStyle="btn-primary"
          buttonSize="btn-large"
          type="submit"
        >
          FIND A DEVELOPER
        </SmallButton>
      </div>
      <p>
        With Dev.It, we will connect you with freelancing developers to help you
        with your coding needs!
      </p>
    </div>
  );
}

export default LandingPage;
