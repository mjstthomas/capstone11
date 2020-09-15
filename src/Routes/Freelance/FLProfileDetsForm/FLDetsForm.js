import React, { useState, useContext } from "react";
import Header from "../../../Components/Header/Header";
import AddSkill from "../../../Components/Utilities/AddSkill/AddSkill";
import AddButton from "../../../Components/Utilities/AddButton/AddButton";
import AppContext from "../../../AppContext";

function FLDetsForm(props) {
  const { addSkill, AddSkills } = useContext(AppContext);
  const [work, setWork] = useState([]);

  const addWork = (e) => {
    const newURL =
      e.target.parentNode.parentNode.parentNode.childNodes[2].value;
    const prevState = work;
    prevState.push(newURL);
    setWork(prevState);
  };

  const addedSkills = AddSkills.map((skill, index) => (
    <AddSkill
      typeOfSkill="addedSkills"
      skill={skill}
      key={index}
      index={index}
    />
  ));

  const addedWork = work.map((work, index) => (
    <img src={work} alt="featured work" key={index} index={index} />
  ));

  return (
    <form>
      <Header />
      <h1>Your Details</h1>
      <section>
        <article className="skills-container">
          <h2>Add Skills</h2>
          {addedSkills}
        </article>
        <AddButton
          onClick={(e) => {
            e.preventDefault();
            addSkill(e);
          }}
        />
      </section>
      <section>
        <h2>Featured Work</h2>
        {addedWork}
        <label htmlFor="featured-work">Featured Work URL</label>
        <input type="url" id="featured-work" name="featured-word" />
        <AddButton
          onClick={(e) => {
            e.preventDefault();
            addWork(e);
          }}
        />
      </section>
    </form>
  );
}

export default FLDetsForm;
