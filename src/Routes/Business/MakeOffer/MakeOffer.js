import React, { useState, useContext } from "react";
import {useParams} from 'react-router-dom';
import AppContext from "../../../AppContext";
import Header from "../../../Components/Header/Header";
import SmallButton from "../../../Components/Utilities/SmallButton/SmallButton";
import ApiService from '../../../services/ApiService';
import "./MakeOffer.css";

export default function MakeOffer(props) {
  const context = useContext(AppContext);
  const [payrate, setPayrate] = useState("");
  const [projectInfo, setProjectInfo] = useState("");
  const [jobDetails, setJobDetails] = useState("");
  const {freelanceID} = useParams()
  const [error, setError] = useState("");

  
  const handleSubmit = (event) => {
    event.preventDefault();
    const newOffer = {
      image: context.user.image,
      emp_name: context.user.nickname,
      payrate: payrate,
      offer_info: projectInfo,
      offer_detail: jobDetails,
      dev_id: freelanceID
    }
    ApiService.postOffer(newOffer);
    props.history.goBack();
  };

  return (
    <main>
      <Header />
      <form id="make-offer-form" onSubmit={handleSubmit}>
        {error && <p className="error">{error}</p>}
        <h1>Make an offer!</h1>
        <label className="offer-labels" htmlFor="payrate">
          Pay Rate per hour:
        </label>
        <input
          name="payrate"
          id="payrate"
          type="number"
          value={payrate}
          onChange={(e) => setPayrate(e.target.value)}
          required
        />
        <label className="offer-labels" htmlFor="project-info">
          Project Info:
        </label>
        <textarea
          name="project-info"
          id="project-info"
          value={projectInfo}
          cols="35"
          rows="8"
          onChange={(e) => setProjectInfo(e.target.value)}
          required
        />
        <label className="offer-labels" htmlFor="job-details">
          Job Details:
        </label>
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
