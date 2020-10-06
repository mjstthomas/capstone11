import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import Cancel from "../DenyButton/DenyButton";
import "./AddSkill.css";
import AppContext from "../../../AppContext";

function getOptions() {
  //TO DO fetch skills from server
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
  const location = useLocation();

  return (
    <article className="skill-input">
      <section className="container">
        <label htmlFor="skill-level">Experience</label>
        <select
          onLoad={() =>
            location.pathname === "/Freelancer/Edit"
              ? context.setLevel(
                  props.skill.level,
                  props.index,
                  props.typeOfSkill
                )
              : null
          }
          onChange={(e) => {
            context.setLevel(e.target.value, props.index, props.typeOfSkill);
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
          onLoad={() =>
            location.pathname === "/Freelancer/Edit"
              ? context.setSkill(
                  props.skill.skill,
                  props.index,
                  props.typeOfSkill
                )
              : null
          }
          onChange={(e) =>
            context.setSkill(e.target.value, props.index, props.typeOfSkill)
          }
        />
        <datalist id="skill-list">{options}</datalist>
      </section>
      {location.pathname === "/SignUp/FLDetails" && (
        <Cancel
          onClick={(e) => {
            e.preventDefault();
            context.removeSkill(props.index, props.typeOfSkill);
          }}
        />
      )}
      {location.pathname === "/Freelancer/Edit" && (
        <Cancel
          onClick={(e) => {
            e.preventDefault();
            context.editRemoveSkill(props.index);
          }}
        />
      )}
    </article>
  );
}
export default AddSkill;
