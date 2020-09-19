import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "./FLDetsForm.css";
import Header from "../../../Components/Header/Header";
import AddSkill from "../../../Components/Utilities/AddSkill/AddSkill";
import AddButton from "../../../Components/Utilities/AddButton/AddButton";
import Cancel from "../../../Components/Utilities/DenyButton/DenyButton";
import PictureUpload from "../../../Components/PictureUpload/PictureUpload";
import SmallButton from "../../../Components/Utilities/SmallButton/SmallButton";
import AppContext from "../../../AppContext";

function FLDetsForm(props) {
  const context = useContext(AppContext);
  const [work, setWork] = useState([]);
  const [workInput, setWorkInput] = useState("");

  const saveChanges = (e) => {
    props.history.push("/login");
  };
  const addWork = (e) => {
    const newURL =
      e.target.parentNode.parentNode.parentNode.childNodes[2].value;
    const prevState = work;
    prevState.push(newURL);
    setWork(prevState);
  };

  const removeWork = (index) => {
    const prevState = work;
    prevState.splice(index, 1);
    setWork(prevState);
  };

  const workChange = (e) => {
    setWorkInput(e.target.value);
  };

  const addedSkills = context.AddSkills.map((skill, index) => (
    <AddSkill typeOfSkill="AddSkills" skill={skill} key={index} index={index} />
  ));

  const addedWork = work.map((work, index) => (
    <article key={index} index={index}>
      <Link to={work}>{work}</Link>
      <Cancel onClick={() => removeWork(index)} />
    </article>
  ));

  return (
    <main>
      <Header />
      <form id="fl-details-form">
        <h1>Your Details</h1>
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
          <label htmlFor="featured-work">Featured Work URL</label>
          <input
            type="url"
            id="featured-work"
            name="featured-word"
            value={workInput}
            onChange={(e) => workChange(e)}
          />
          <AddButton
            onClick={(e) => {
              e.preventDefault();
              addWork(e);
            }}
          />
        </section>
        <PictureUpload />
        <SmallButton
          className="btns"
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
