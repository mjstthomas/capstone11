import React, { useContext } from "react";
import "./Search.css";
import Header from "../../../Components/Header/Header";
import AddSkillComponent from "../../../Components/Utilities/AddSkill/AddSkill";
import AddButton from "../../../Components/Utilities/AddButton/AddButton";
import SmallButton from "../../../Components/Utilities/SmallButton/SmallButton";
import AppContext from "../../../AppContext";
import ApiService from "../../../services/ApiService";

function Search(props) {
  const context = useContext(AppContext);

  const mustHaveSkills = context.MustHaveSkills.map((skill, index) => (
    <AddSkillComponent
      typeOfSkill="MustHaveSkills"
      search="true"
      skill={skill}
      key={index}
      index={index}
    />
  ));

  const handleSubmit = () => {
    ApiService.getProfilesSearch(
      context.MustHaveSkills[0].skill,
      context.MustHaveSkills[1].skill,
      context.MustHaveSkills[2].skill
    ).then((res) => {
      context.handleResult(res);
      props.history.push("/Business/Results");
    });
  };

  return (
    <main>
      <Header />
      <form
        id="search-form"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <section className="search-container">
          <h1>Looking for Help?</h1>
          <article className="search-skills-container">
            <h2>Must Have Skills</h2>
            <p>You can add up to three</p>
            {mustHaveSkills}

            <SmallButton
              className="btn"
              buttonStyle="btn-outline"
              buttonSize="btn-large"
              type="Submit"
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
            >
              Search
            </SmallButton>
          </article>
        </section>
      </form>
    </main>
  );
}
export default Search;
