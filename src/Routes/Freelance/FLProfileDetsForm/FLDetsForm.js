import React, { useState, useContext } from "react";
import "./FLDetsForm.css";
import Header from "../../../Components/Header/Header";
import AddSkill from "../../../Components/Utilities/AddSkill/AddSkill";
import FeatureWork from "./Component/FeatureWork";
import AddButton from "../../../Components/Utilities/AddButton/AddButton";
import PictureUpload from "../../../Components/PictureUpload/PictureUpload";
import SmallButton from "../../../Components/Utilities/SmallButton/SmallButton";
import AppContext from "../../../AppContext";

function FLDetsForm(props) {
  const context = useContext(AppContext);
  // const [work, setWork] = useState([]);
  const [workInput, setWorkInput] = useState("");

  const saveChanges = (e) => {
    console.log(context.user)
    props.history.push("/login");
  };

  const workChange = (e) => {
    setWorkInput(e.target.value);
  };

  const addedSkills = context.user.skills.map((skill, index) => (
    <AddSkill typeOfSkill="skills" skill={skill} key={index} index={index} />
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
      <form className="fl-details-form">
        <h1>Your Details</h1>
        <section>
          <article className="skills-container">
            <h2>Add Skills</h2>
            {addedSkills}
          </article>
          <AddButton
            onClick={(e) => {
              e.preventDefault();
              context.setSkill("skills");
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
          onClick={(e) => saveChanges(e)}
        >
          Save
        </SmallButton>
      </form>
    </main>
  );
}

export default FLDetsForm;
