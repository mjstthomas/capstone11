import React, { useState, useContext, useEffect } from "react";
import "./EditFLProfile.css";
import Header from "../../Components/Header/Header";
import AddSkill from "../../Components/Utilities/AddSkill/AddSkill";
import AddButton from "../../Components/Utilities/AddButton/AddButton";
import PictureUpload from "../../Components/PictureUpload/PictureUpload";
import SmallButton from "../../Components/Utilities/SmallButton/SmallButton";
import AppContext from "../../AppContext";
import ApiService from "../../services/ApiService";

function FLDetsForm(props) {
  const context = useContext(AppContext);
  const [textArea, setTextarea] = useState("");
  const [image, setImage] = useState(context.user.image);

  const textarea = context.user.dev_blurb;

  const handleClick = () => {
    setTextarea(textarea);
  };

  const saveChanges = () => {
    const newUser = { ...context.user };
    newUser.dev_blurb = textArea;
    newUser.level = [];
    newUser.skills = [];
    context.EditSkills.map((item) => {
      console.log(item);
      newUser.level.push(item.level);
      newUser.skills.push(item.skills);
    });
    // for (let i = 0; i < context.EditSkills.length; i++){
    //   newUser.level.push(context.Editskills[i].level)
    //   newUser.skills.push(context.EditSkills[i].skills)
    // }
    console.log(newUser)
    ApiService.patchProfile(newUser)
      .then(() => context.saveFreelanceSkills())
      .then(() => {
        setTimeout(() => {
          props.history.push(`/Freelancer/Profile/${context.user.user_id}`);
        }, 2000);
      });
  };

  const setProfileImage = (imageURL) => {
    setImage(imageURL);
  };

  const makeSkills = context.EditSkills.map((skill, index) => (
    <AddSkill
      typeOfSkill="EditSkills"
      skill={skill}
      key={index}
      index={index}
    />
  ));

  return (
    <main>
      <Header />
      <form
        className="fl-details-form"
        onSubmit={(e) => {
          e.preventDefault();
          saveChanges();
        }}
      >
        <h1>Your Details</h1>
        <label className="about-label" htmlFor="about">
          About
        </label>
        <textarea
          id="about"
          name="about"
          cols="40"
          rows="8"
          placeholder={context.user.dev_blurb}
          value={textArea}
          onClick={handleClick}
          onChange={(e) => setTextarea(e.target.value)}
        ></textarea>
        <section>
          <article className="skills-container">
            <h2>Edit Skills</h2>
            {makeSkills}
          </article>
          <AddButton
            onClick={(e) => {
              e.preventDefault();
              context.addSkill("EditSkills");
            }}
          />
        </section>
        <PictureUpload image={image} setImage={context.user.image} />
        <SmallButton
          className="btn"
          buttonStyle="btn-outline"
          buttonSize="btn-large"
          type="Submit"
          onSubmit={(e) => {
            e.preventDefault();
            saveChanges();
          }}
        >
          Save
        </SmallButton>
      </form>
    </main>
  );
}

export default FLDetsForm;
