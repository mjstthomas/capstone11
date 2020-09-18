import React, { useContext } from "react";
import "./Search.css";
import Header from "../../../Components/Header/Header";
import AddSkillComponent from "../../../Components/Utilities/AddSkill/AddSkill";
import AddButton from "../../../Components/Utilities/AddButton/AddButton";
import SmallButton from "../../../Components/Utilities/SmallButton/SmallButton";
import AppContext from "../../../AppContext";



function Search(props) {
  const context = useContext(AppContext);
  const search = (e) =>{
  };

  const mustHaveSkills = context.MustHaveSkills.map((skill, index) => (
    <AddSkillComponent
      typeOfSkill="MustHaveSkills"
      skill={skill}
      key={index}
      index={index}
    />
  ));

  const niceToHaveSkills = context.NiceToHaveSkills.map((skill, index) => (
    <AddSkillComponent
      typeOfSkill="NiceToHaveSkills"
      skill={skill}
      key={index}
      index={index}
    />
  ));

  const handleSubmit = event =>{
    event.preventDefault();
    context.handleResult();
    setTimeout(()=>{
      props.history.push('/Business/Results')
    }, 2000)
  }
  return (
    <form id="search-form" onSubmit={handleSubmit}>
      <Header />
      <h1>Looking for Help?</h1>
      <section>
        <article className="skills-container">
          <h2>Must Have Skills</h2>
          {mustHaveSkills}
        </article>
        <AddButton
          onClick={(e) => {
            e.preventDefault();
            context.addSkill(e);
          }}
        />
      </section>
      <br />
      <section>
        <article className="skills-container">
          <h2>Nice To Have Skills</h2>
          {niceToHaveSkills}
        </article>
        <AddButton
          onClick={(e) => {
            e.preventDefault();
            context.addSkill(e);
          }}
        />
      </section>
      <SmallButton
        buttonStyle="small-btn"
        type="Submit"
        onClick={(e) => search(e)}
      >
        Search
      </SmallButton>
    </form>
  );
}
export default Search;
