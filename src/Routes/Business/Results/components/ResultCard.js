import React from "react";
import "./ResultCard.css";
import { Link } from "react-router-dom";

export default function ResultCard(props) {
  const skill =
    props.skills.map((skill, index) => (
      <p key={index} className="skill">
        {skill}
      </p>
    )) || "";
  return (
    <section className="result-card-container">
      <section className="result-card">
        <Link className="result-link" to={`/Business/Results/${props.id}`}>
          <h3 className="result-card-header">{props.name}</h3>

          <article className="result-card-image-container">
            <img className="result-image" src={props.image} alt="result" />
          </article>
        </Link>
        {/* TO DO add rating system
           <article className="result-card-rating">
            <p>
              Rating: <span className="rating">{props.rating}</span>
            </p>
          </article> */}
        <article className="skills">{skill}</article>
      </section>
    </section>
  );
}
