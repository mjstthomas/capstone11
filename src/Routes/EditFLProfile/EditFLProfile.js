import React, { useState, useContext } from "react";
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
  const [textarea, setTextarea] = useState(context.user.dev_blurb);
  const [image, setImage] = useState(context.user.image);

  const saveChanges = () => {
    ApiService.patchProfile({ dev_blurb: textarea, image: image })
      .then(() => context.saveFreelanceSkills())
      .then(() => {
        props.history.push(`/Freelancer/Profile/${context.user.user_id}`);
      });
  };

  const setProfileImage = (imageURL) => {
    setImage(imageURL);
  };

  const makeSkills = 
    context.EditSkills.map((skill, index) => (
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
          placeholder="Enter a little something about yourself."
          value={textarea}
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
        <PictureUpload image={image} setImage={setProfileImage} />
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
