import React from "react";
import Cancel from "../DenyButton/DenyButton";
import "./AddSkill.css";

function getOptions() {
  //fetch skills from server
  //then return array of <option>

  //for now return example
  const skills = ["JavaScript", "CSS", "HTML", "React.js", "Node.js"];
  const options = skills.map((skill, index) => (
    <option key={index}>{skill}</option>
  ));
  return options;
}

function AddSkill(props) {
  const options = getOptions();

  return (
    <article className="skill-input">
      <section className="container">
        <label htmlFor="skill-level">Experience</label>
        <select
          onChange={(e) =>
            props.setLevel(e.target.value, props.index, props.typeOfSkill)
          }
          id="skill-level"
          name="skill-level"
        >
          <option default>---</option>
          <option>Entry Level</option>
          <option>Intermediate</option>
          <option>Expert</option>
        </select>
      </section>
      <span> in </span>
      <section className="container">
        <label htmlFor="skill-name">Skill</label>
        <input
          type="text"
          id="skill-name"
          name="skill-name"
          list="skill-list"
          onChange={(e) =>
            props.setSkill(e.target.value, props.index, props.typeOfSkill)
          }
        />
        <datalist id="skill-list">{options}</datalist>
      </section>
      <Cancel
        onClick={(e) => {
          e.preventDefault();
          props.removeSkill(props.index, props.typeOfSkill);
        }}
      />
    </article>
  );
}
export default AddSkill;
