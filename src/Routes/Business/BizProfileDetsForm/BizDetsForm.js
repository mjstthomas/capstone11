import React, { useState } from "react";
import Header from "../../../Components/Header/Header";
import PictureUpload from "../../../Components/PictureUpload/PictureUpload";
import SmallButton from "../../../Components/Utilities/SmallButton/SmallButton";
import "./BizDetsForm.css";
import ApiService from "../../../services/ApiService";

function BizDetsForm(props) {
  const [textarea, setTextarea] = useState("");
  const [error, setError] = useState("");

  const saveChanges = (e) => {
    ApiService.addProfile({ emp_blurb: textarea }).then((res) =>
      !res.ok
        ? setError("Something went wrong")
        : props.history.push("/Business")
    );
  };
  const onChange = (e) => {
    setTextarea(e.target.value);
  };
  return (
    <main>
      <Header />
      <form id="biz-details-form">
        {error && <p>{error}</p>}
        <h1>Business Details</h1>
        <label className="about-label" htmlFor="about">
          About
        </label>
        <textarea
          id="about"
          name="about"
          cols="40"
          rows="15"
          placeholder="Enter a little something about your business."
          value={textarea}
          onChange={(e) => setTextarea(e.target.value)}
        ></textarea>
        <PictureUpload />
        <SmallButton
          className="btn"
          buttonStyle="btn-outline"
          buttonSize="btn-large"
          type="Submit"
          onSubmit={() => saveChanges()}
        >
          Save
        </SmallButton>
      </form>
    </main>
  );
}
export default BizDetsForm;
