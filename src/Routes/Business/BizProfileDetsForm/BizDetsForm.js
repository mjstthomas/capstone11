import React, { useState } from "react";
import Header from "../../../Components/Header/Header";
import PictureUpload from "../../../Components/PictureUpload/PictureUpload";
import SmallButton from "../../../Components/Utilities/SmallButton/SmallButton";
import "./BizDetsForm.css";

function BizDetsForm(props) {
  const [textarea, setTextarea] = useState("");

  const saveChanges = (e) => {
    props.history.push("/login");
  };
  const onChange = (e) => {
    setTextarea(e.target.value);
  };
  return (
    <main>
      <Header />
      <form id="biz-details-form">
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
          onChange={(e) => onChange(e)}
        ></textarea>
        <PictureUpload />
        <SmallButton
          className="btn"
          buttonStyle="btn-outline"
          buttonSize="btn-large"
          type="Submit"
          onClick={(e) => saveChanges(e)}
        >
          Save
        </SmallButton>
      </form>
    </main>
  );
}
export default BizDetsForm;
