import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import Header from "../../../Components/Header/Header";
import AppContext from "../../../AppContext";
import image from "../../../imgs/ninja.png";
import searchArray from "../../../searchArray";
import "./FLProfile.css";
import ApiService from "../../../services/ApiService";

function FLProfile(props) {
  const context = useContext(AppContext);
  let { freelanceID } = useParams();
  let [profile, setProfile] = useState({
    id: "",
    dev_blurb: "",
    emp_blurb: "",
    user_id: "",
    nickname: "",
    skills: [],
    level: [],
    image: "",
  });

  useEffect(() => {
    ApiService.getUserProfiles(freelanceID).then((profile) => {
      setProfile(profile);
    });
  }, []);

  return (
    <main className="FLP-container">
      <Header />
      <section className="FLP-image-offer-container">
        <article className="FLP-image-container">
          <img src={image} className="FLP-ninja" />
        </article>
        <article className="FLP-offer-container">
          {context.user.id != freelanceID && (
            <button
              className="FLP-make-offer-btn"
              onClick={() =>
                props.history.push(`/Business/Results/${freelanceID}/MakeOffer`)
              }
            >
              Make Offer
            </button>
          )}
          {/* {context.user.id == freelanceID && <section className="edit-btn-container">
                                                  <i class="fas fa-edit"></i>
                                                </section>} */}
        </article>
      </section>
      <section className="FLP-info-container">
        <h3 className="info-container-label">Skills:</h3>
        <article className="FLP-skills">
          <p className="profile-text">{profile.skills.join(", ")}</p>
        </article>
      </section>
      <section className="FLP-info-container">
        <h3 className="info-container-label">Projects:</h3>
        <article className="FLP-projects">
          <p className="profile-text">{profile.dev_blurb}</p>
        </article>
      </section>
      <section className="FLP-info-container">
        <h3 className="info-container-label">Reviews:</h3>
        <article className="reviews">
          <p className="profile-text">{profile.reviews}</p>
        </article>
      </section>
    </main>
  );
}
export default FLProfile;
