import React, { useContext } from "react";
import AppContext from "../../../AppContext";
import ApiService from "../../../services/ApiService";
import "./SkillButton.css";

export default function SkillButton(props) {
  const context = useContext(AppContext);

  const handleDelete = () => {
    ApiService.getProfilesSearch(
      context.MustHaveSkills[0].skill,
      context.MustHaveSkills[1].skill ? context.MustHaveSkills[1].skill : "-",
      context.MustHaveSkills[2].skill ? context.MustHaveSkills[2].skill : "-"
    ).then((res) => {
      context.handleResult(res);
      props.history.push("/Business/Results");
    });
  };

  const deleteSkillOnClick = () => {
    context.deleteSkill(props.name).then(() => handleDelete());
  };
  return (
    <section className="skill-btn-container">
      <article className="skill-btn" name={props.name}>
        {props.skill}
        <button
          name={props.name}
          className="fas fa-times delete"
          onClick={() => deleteSkillOnClick()}
        ></button>
      </article>
    </section>
  );
}
