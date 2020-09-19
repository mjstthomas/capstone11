import React, { useState } from "react";
import Header from "../../../Components/Header/Header";
import SmallButton from "../../../Components/Utilities/SmallButton/SmallButton";
import "./MakeOffer.css";

export default function MakeOffer() {
  const [payrate, setPayrate] = useState("");
  const [projectInfo, setProjectInfo] = useState("");
  const [jobDetails, setJobDetails] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    console.log(`
      Payrate: ${payrate}
      Project Info: ${projectInfo}
      Job Details: ${jobDetails}
    `);

    event.preventDefault();
  };

  return (
    <main>
      <Header />
      <form id="make-offer-form" onSubmit={handleSubmit}>
        {error && <p className="error">{error}</p>}
        <h1>Make an offer!</h1>
        <label htmlFor="payrate">Pay Rate per hour:</label>
        <input
          name="payrate"
          id="payrate"
          type="number"
          value={payrate}
          onChange={(e) => setPayrate(e.target.value)}
          required
        />
        <label htmlFor="project-info">Project Info:</label>
        <textarea
          name="project-info"
          id="project-info"
          value={projectInfo}
          cols="35"
          rows="8"
          onChange={(e) => setProjectInfo(e.target.value)}
          required
        />
        <label htmlFor="job-details">Job Details:</label>
        <textarea
          id="job-details"
          name="job-details"
          value={jobDetails}
          cols="35"
          rows="8"
          onChange={(e) => setJobDetails(e.target.value)}
          required
        />
        <SmallButton
          className="btn offer-submit-btn"
          buttonStyle="btn-outline"
          buttonSize="btn-large"
          type="submit"
          onClick={(e) => handleSubmit(e)}
        >
          Submit
        </SmallButton>
      </form>
    </main>
  );
}
