import React from "react";
import "../App.css";
import "./LandingPage.css";
import { SmallButton } from "../Components/Utilities/SmallButton/SmallButton";

function LandingPage() {
  return (
    <div className="landing-container">
      <h1>Dev.It</h1>
      <div className="landing-btns">
        <SmallButton
          className="btns"
          buttonStyle="btn-outline"
          buttonSize="btn-large"
          type="submit"
        >
          SIGN UP
        </SmallButton>
        <SmallButton
          className="btns"
          buttonStyle="btn-outline"
          buttonSize="btn-large"
          type="submit"
        >
          LOG IN
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
