import React from "react";
import "../App.css";
import "./LandingPage.css";
import SmallButton from "../Components/Utilities/SmallButton/SmallButton";

function LandingPage(props) {
  return (
    <div className="landing-container">
      <h1>DEV.IT</h1>
      <div className="landing-btns">
        <SmallButton
          className="btn"
          buttonStyle="btn-outline"
          buttonSize="btn-large"
          type="submit"
          onClick={() => props.history.push("/login")}
        >
          Enter
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
