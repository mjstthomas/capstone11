import React, { useEffect, useState, useContext } from "react";
import { useParams, Redirect, Link } from "react-router-dom";
import Header from "../../../Components/Header/Header";
import ApiService from "../../../services/ApiService";
import AppContext from "../../../AppContext";
import "./BizProfile.css";

function BizProfile(props) {
  const context = useContext(AppContext);
  let { businessID } = useParams();
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

    ApiService.getUserProfiles(businessID).then((profile) => {
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
    <main>
      {context.user.id === businessID && context.user.emp_blurb === null ? (
        <Redirect to="/SignUp/BizDetails" />
      ) : (
        <section className="profile-wrapper">
          <Header />
          <section className="profile-header">
            <h1>{profile.nickname}</h1>
            {context.user.user_id == businessID && (
              <Link to={`/Business/Profile/Edit/${businessID}`}>
                <i className="fas fa-edit"></i>
              </Link>
            )}
          </section>
          <section className="Biz-image-offer-container">
            <article className="Biz-image-container">
              <img src={profile.image} className="Biz" alt={profile.nickname} />
            </article>
          </section>
          <section className="Biz-info-container">
            <h3>About Us</h3>
            <article className="Biz-blurb">
              <p className="profile-text">{profile.emp_blurb}</p>
            </article>
          </section>
        </section>
      )}
    </main>
  );
}
export default BizProfile;
