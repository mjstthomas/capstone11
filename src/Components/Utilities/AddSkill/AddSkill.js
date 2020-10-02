import React, { useContext } from "react";
import Cancel from "../DenyButton/DenyButton";
import "./AddSkill.css";
import AppContext from "../../../AppContext";

function getOptions() {
  //fetch skills from server
  //then return array of <option>

  //for now return example
  const skills = [
    "Node.js",
    "React",
    "Postgres",
    "Python",
    "HTML",
    "OAuth",
    "Shopify",
    "Java",
    "Drupal",
    "C++",
    "SQL",
  ];
  const options = skills.map((skill, index) => (
    <option key={index}>{skill}</option>
  ));
  return options;
}

function AddSkill(props) {
  const context = useContext(AppContext);
  const options = getOptions();

  return (
    <article className="skill-input">
      <section className="container">
        <label htmlFor="skill-level">Experience</label>
        <select
          onChange={(e) => {
            if (props.search !== "true") {
              context.setLevel(e.target.value, props.index, props.typeOfSkill);
            } else {
              context.searchLevel(
                e.target.value,
                props.index,
                props.typeOfSkill
              );
            }
          }}
          id="skill-level"
          name="skill-level"
        >
          <option default>---</option>
          <option value="entry">Entry Level</option>
          <option value="mid">Intermediate</option>
          <option value="expert">Expert</option>
        </select>
      </section>
      <span>in</span>
      <section className="container">
        <label htmlFor="skill-name">Skill</label>
        <input
          type="text"
          id="skill-name"
          name="skill-name"
          list="skill-list"
          onChange={(e) => {
            return context.setSkill(
              e.target.value,
              props.index,
              props.typeOfSkill
            );
          }}
        />
        <datalist id="skill-list">{options}</datalist>
      </section>
      <Cancel
        onClick={(e) => {
          e.preventDefault();
          context.removeSkill(props.index, props.typeOfSkill);
        }}
      />
    </article>
  );
}
export default AddSkill;
