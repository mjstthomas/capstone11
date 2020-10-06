import React, { useContext } from "react";
import AppContext from "../../../AppContext";
import ApiService from "../../../services/ApiService";
import "./SkillButton.css";

export default function SkillButton(props) {
  const context = useContext(AppContext);

  const handleDelete = () => {
    console.log(context.MustHaveSkills)
    ApiService.getProfilesSearch(
      context.MustHaveSkills[0].skill ? context.MustHaveSkills[0].skill : "-",
      context.MustHaveSkills[1].skill ? context.MustHaveSkills[1].skill : "-",
      context.MustHaveSkills[2].skill ? context.MustHaveSkills[2].skill : "-"
    ).then((res) => {
      console.log(res)
      context.handleResult(res);
    });
  };

  const deleteSkillOnClick = () => {
    context.deleteSkill(props.name);
    setTimeout(()=>{
      handleDelete();
    }, 2000)
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
