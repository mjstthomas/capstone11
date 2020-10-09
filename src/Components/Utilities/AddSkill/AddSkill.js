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
  const level = props.skill.level ? props.skill.level : '---';
  const skill = props.skill.skill ? props.skill.skill : '---';

  return (
    <article className="skill-input">
      <section className="container">
        <label htmlFor="skill-level">Experience</label>
        <select
          onLoad={() =>
            location.pathname ===
              `/Freelancer/Profile/Edit/${context.user.user_id}` &&
            context.setLevel(props.skill.level, props.index, props.typeOfSkill)
          }
          onChange={(e) => {
            context.setLevel(e.target.value, props.index, props.typeOfSkill);
          }}
          id="skill-level"
          name="skill-level"
        >
          <option default>{level}</option>
          <option value="entry">Entry Level</option>
          <option value="mid">Intermediate</option>
          <option value="expert">Expert</option>
        </select>
      </section>
      <span>in</span>
      <section className="container">
        <label htmlFor="skill-name">Skill</label>
        <select
          type="text"
          id="skill-name"
          name="skill-name"
          onLoad={() =>
            location.pathname ===
              `/Freelancer/Profile/Edit/${context.user.user_id}` &&
            context.setSkill(props.skill.skill, props.index, props.typeOfSkill)
          }
          onChange={(e) =>
            context.setSkill(e.target.value, props.index, props.typeOfSkill)
          }
        >
        <option default>{skill}</option>
        {options}
      </select>
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
