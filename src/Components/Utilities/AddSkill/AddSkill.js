import React from "react";
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

function AddSkill() {
  const options = getOptions();

  return (
    <article>
      <section className="container">
        <label htmlFor="skill-level">Skill Level </label>
        <select id="skill-level" name="skill-level">
          <option default>---</option>
          <option>Entry Level</option>
          <option>Intermediate</option>
          <option>Expert</option>
        </select>
      </section>
      <span> in </span>
      <section className="container">
        <label htmlFor="skill-name">Skill </label>
        <input
          type="text"
          id="skill-name"
          name="skill-name"
          list="skill-list"
        />
        <datalist id="skill-list">{options}</datalist>
      </section>
    </article>
  );
}
export default AddSkill;
