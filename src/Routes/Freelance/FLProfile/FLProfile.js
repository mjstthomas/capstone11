import React, { useEffect, useState, useContext } from "react";
import { useParams, Redirect, Link } from "react-router-dom";
import Header from "../../../Components/Header/Header";
import AppContext from "../../../AppContext";
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
    let isMounted = true; // track whether component is mounted

    ApiService.getUserProfiles(freelanceID).then((profile) => {
      if (isMounted) {
        setProfile(profile);
      }
    });

    return () => {
      // clean up
      isMounted = false;
    };
  }, []); // only on "didMount"

  return (
    <main className="FLP-container">
      {context.user.id === freelanceID && context.user.dev_blurb === null ? (
        <Redirect to="/SignUp/FLDetails" />
      ) : (
        <section className="profile-wrapper">
          <Header />
          <section className="profile-header">
            <h1>{profile.nickname}</h1>
            {context.user.user_id == freelanceID && (
              <Link to={`/Freelancer/Profile/Edit/${freelanceID}`}>
                <i className="fas fa-edit"></i>
              </Link>
            )}
          </section>
          <section className="FLP-image-offer-container">
            <article className="FLP-image-container">
              <img className="FLP" src={profile.image} alt={profile.nickname} />
            </article>
            {context.user.id != freelanceID && (
              <button
                className="FLP-make-offer-btn"
                onClick={() =>
                  props.history.push(
                    `/Business/Results/${freelanceID}/MakeOffer`
                  )
                }
              >
                Make Offer
              </button>
            )}
          </section>
          <section className="FLP-info-container">
            <h3 className="info-container-label">About Me:</h3>
            <article className="FLP-projects">
              <p className="profile-text">{profile.dev_blurb}</p>
            </article>
          </section>
          <section className="FLP-info-container">
            <h3 className="info-container-label">Skills:</h3>
            <article className="FLP-skills">
              <p className="profile-text">{profile.skills.join(", ")}</p>
            </article>
          </section>
          <section className="FLP-info-container">
            <h3 className="info-container-label">Reviews:</h3>
            <article className="reviews">
              <p className="profile-text">{profile.reviews}</p>
            </article>
          </section>
        </section>
      )}
    </main>
  );
}
export default FLProfile;
