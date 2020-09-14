import React from "react";
import Header from "../../../Components/Header/Header";
import AddSkill from "../../../Components/Utilities/AddSkill/AddSkill";
import AddButton from "../../../Components/Utilities/AddButton/AddButton";

function Search(props) {
  const mustHaveSkills = props.MustHaveSkills.map((skill, index) => (
    <AddSkill
      setLevel={props.setLevel}
      setSkill={props.setSkill}
      removeSkill={props.removeSkill}
      typeOfSkill="MustHaveSkills"
      skill={skill}
      key={index}
      index={index}
    />
  ));

  const niceToHaveSkills = props.NiceToHaveSkills.map((skill, index) => (
    <AddSkill
      setLevel={props.setLevel}
      setSkill={props.setSkill}
      removeSkill={props.removeSkill}
      typeOfSkill="NiceToHaveSkills"
      skill={skill}
      key={index}
      index={index}
    />
  ));
  return (
    <form>
      <Header />
      <h1>Looking for Help?</h1>
      <section>
        <article className="skills-container">
          <h2>Must Have</h2>
          {mustHaveSkills}
        </article>
        <AddButton
          onClick={(e) => {
            e.preventDefault();
            props.addSkill(e);
          }}
        />
      </section>
      <br />
      <section>
        <article className="skills-container">
          <h2>Nice To Have</h2>
          {niceToHaveSkills}
        </article>
        <AddButton
          onClick={(e) => {
            e.preventDefault();
            props.addSkill(e);
          }}
        />
      </section>
    </form>
  );
}
export default Search;
