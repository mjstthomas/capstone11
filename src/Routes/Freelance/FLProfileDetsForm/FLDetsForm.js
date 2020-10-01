import React, { useState, useContext } from "react";
import "./FLDetsForm.css";
import Header from "../../../Components/Header/Header";
import AddSkill from "../../../Components/Utilities/AddSkill/AddSkill";
import FeatureWork from "./Component/FeatureWork";
import AddButton from "../../../Components/Utilities/AddButton/AddButton";
import PictureUpload from "../../../Components/PictureUpload/PictureUpload";
import SmallButton from "../../../Components/Utilities/SmallButton/SmallButton";
import AppContext from "../../../AppContext";
import ApiService from "../../../services/ApiService";

function FLDetsForm(props) {
  const context = useContext(AppContext);
  const [textarea, setTextarea] = useState("");
  const [workInput, setWorkInput] = useState("");

  const saveChanges = () => {
    ApiService.addProfile({ dev_blurb: textarea })
      .then(context.addFreelanceSkills())
      .then(context.addFreelanceWork())
      .then(props.history.push("/Freelancer"));
  };

  const workChange = (e) => {
    setWorkInput(e.target.value);
  };

  const addedSkills = context.AddSkills.map((skill, index) => (
    <AddSkill typeOfSkill="AddSkills" skill={skill} key={index} index={index} />
  ));

  const addedWork = context.user.work.map((url, index) => (
    <FeatureWork
      key={index}
      index={index}
      url={url}
      removeWork={context.removeWork}
    />
  ));

  return (
    <main>
      <Header />
      <form id="fl-details-form">
        <h1>Your Details</h1>
        <label className="about-label" htmlFor="about">
          About
        </label>
        <textarea
          id="about"
          name="about"
          cols="40"
          rows="8"
          placeholder="Enter a little something about your business."
          value={textarea}
          onChange={(e) => setTextarea(e.target.value)}
        ></textarea>
        <section>
          <article className="skills-container">
            <h2>Add Skills</h2>
            {addedSkills}
          </article>
          <AddButton
            onClick={(e) => {
              e.preventDefault();
              context.addSkill("AddSkills");
            }}
          />
        </section>
        <section>
          <h2>Featured Work</h2>
          {addedWork}
          <article className="work-input">
            <label htmlFor="featured-work">Add URL</label>
            <input
              type="url"
              id="featured-work"
              name="featured-word"
              value={workInput}
              onChange={(e) => workChange(e)}
            />
          </article>
          <AddButton
            onClick={(e) => {
              e.preventDefault();
              context.addWork(workInput);
              setWorkInput("");
            }}
          />
        </section>
        <PictureUpload />
        <SmallButton
          className="btn"
          buttonStyle="btn-outline"
          buttonSize="btn-large"
          type="Submit"
          onClick={(e) => {
            e.preventDefault();
            saveChanges();
          }}
        >
          Save
        </SmallButton>
      </form>
    </main>
  );
}

export default FLDetsForm;
