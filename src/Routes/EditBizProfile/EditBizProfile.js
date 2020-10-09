import React, { useState, useContext } from "react";
import Header from "../../Components/Header/Header";
import PictureUpload from "../../Components/PictureUpload/PictureUpload";
import SmallButton from "../../Components/Utilities/SmallButton/SmallButton";
import "./EditBizProfile.css";
import ApiService from "../../services/ApiService";
import AppContext from "../../AppContext";
import TokenService from "../../services/TokenService";

function EditBizProfile(props) {
  const context = useContext(AppContext);
  const [textarea, setTextarea] = useState(context.user.emp_blurb);
  const [image, setImage] = useState(context.user.image);

  const saveChanges = () => {
    ApiService.patchProfile({ emp_blurb: textarea, image: image }).then(() => {
      setTimeout(()=>{
        props.history.push(`/Business/Profile/${TokenService.getIdToken()}`);
      }, 2000)
    });
  };

  const setProfileImage = (imageURL) => {
    setImage(imageURL);
  };

  return (
    <main>
      <Header />
      <form
        className="biz-details-form"
        onSubmit={(e) => {
          e.preventDefault();
          saveChanges();
        }}
      >
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
export default EditBizProfile;
