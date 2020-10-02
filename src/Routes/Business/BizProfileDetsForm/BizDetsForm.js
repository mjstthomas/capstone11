import React, { useState } from "react";
import Header from "../../../Components/Header/Header";
import PictureUpload from "../../../Components/PictureUpload/PictureUpload";
import SmallButton from "../../../Components/Utilities/SmallButton/SmallButton";
import "./BizDetsForm.css";
import ApiService from "../../../services/ApiService";

function BizDetsForm(props) {
  const [textarea, setTextarea] = useState("");
  const [image, setImage] = useState("");

  const saveChanges = () => {
    ApiService.addProfile({ emp_blurb: textarea, image: image }).then(() => {
      props.history.push("/login");
    });
  };

  const setProfileImage = (imageURL) => {
    setImage(imageURL);
  };

  return (
    <main>
<<<<<<< HEAD
      <form id="biz-details-form">
=======
      <Header />
      <form
        id="biz-details-form"
        onSubmit={(e) => {
          e.preventDefault();
          saveChanges();
        }}
      >
>>>>>>> 40c9833ecffb391dd7484fba8222289110fc8d69
        <h1>Business Details</h1>
        <label className="about-label" htmlFor="about">
          About
        </label>
        <textarea
          id="about"
          name="about"
          cols="40"
          rows="8"
          placeholder="Enter a little something about your business."
          value={textarea}
          onChange={(e) => setTextarea(e.target.value)}
        ></textarea>
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
export default BizDetsForm;
