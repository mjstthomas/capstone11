import React from "react";
import { useState, useContext } from "react";
import AppContext from "../../../AppContext";
import SkillButton from "../../../Components/Utilities/SkillButton/SkillButton";
import Header from "../../../Components/Header/Header";
import ResultCard from "./components/ResultCard";
import SmallButton from "../../../Components/Utilities/SmallButton/SmallButton";
import "./Results.css";
import ApiSerice from "../../../services/ApiService";

export default function Results(props) {
  const context = useContext(AppContext);

  const deleteSkill = (event) => {
    let name = event.target.name;
    context.deleteSkill(name);
    setTimeout(() => {
      context.handleResult();
    }, 1000);
  };

  const mustHave = context.MustHaveSkills;
  const niceToHave = context.NiceToHaveSkills;
  let allSkills = mustHave;
  if (niceToHave.length > 0 && niceToHave[0].skill !== "") {
    allSkills = mustHave.concat(niceToHave);
  }
  const skills = allSkills.map((item, index) => (
    <SkillButton
      key={index}
      skill={item.skill}
      name={item.skill}
      onClick={deleteSkill}
    />
  ));
  const results = context.resultArray.map((item) => {
    console.log(item);
    ApiSerice.getUserProfiles(item).then((res) => {
      console.log(res);
      context.handleResult(res);
    });
    return (
      <ResultCard
        key={item.id}
        id={item.id}
        name={item.nickname}
        skills={item.skills}
        rating={item.rating}
      />
    );
  });

  return (
    <section className="result-container">
      <Header />
      <article className="skills-container">
        {skills}
        <SmallButton
          className="BTS-btn"
          buttonStyle="btn-outline"
          buttonSize="btn-large"
          onClick={() => {
            props.history.push("/Business/Search");
            context.resetSkills();
          }}
        >
          <i class="fas fa-undo"></i>
        </SmallButton>
      </article>
      <article className="results">{results}</article>
    </section>
  );
}
