import React from "react";
import {useContext} from "react";
import {useParams} from 'react-router-dom';
import Header from '../../../Components/Header/Header';
import AppContext from '../../../AppContext';
import image from "../../../imgs/ninja.png";
import searchArray from '../../../searchArray';
import './FLProfile.css';
{/* <i class="fas fa-edit"></i> */}

function FLProfile(props) {
  const context = useContext(AppContext);
  let {freelanceID} = useParams();

  const profile = searchArray.find(item => item.id == freelanceID);

  
return (
    <main className="FLP-container">
      <Header />
      <section className="FLP-image-offer-container">
        <article className="FLP-image-container">
          <img src={image} className="FLP-ninja" />
        </article>
        <article className="FLP-offer-container">
          <p className="FLP-rating">Rating: {profile.rating}</p>
          {context.user.id != freelanceID && <button 
                                                className="FLP-make-offer-btn" 
                                                onClick={()=> props.history.push(`/Business/Results/${freelanceID}/MakeOffer`)}>
                                                  Make Offer
                                              </button>}
        </article>
      </section>
      <section className="FLP-info-container">
        <h3 className="info-container-label">Skills:</h3>
        <article className="FLP-skills">
        <p className="profile-text">{profile.skills.join(', ')}</p>
        </article>
      </section>
      <section className="FLP-info-container">
        <h3 className="info-container-label">Projects:</h3>
        <article className="FLP-projects">
          <p className="profile-text">{profile.projects}</p>
        </article>
      </section>
      <section className="FLP-info-container">
        <h3 className="info-container-label">Reviews:</h3>
        <article className="reviews">
          <p className="profile-text"></p>
        </article>
      </section>
    </main>
  );
}
export default FLProfile;
