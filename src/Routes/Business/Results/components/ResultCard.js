import React from "react";
import "./ResultCard.css";
import { Link } from 'react-router-dom';
import ninja from "../../../../imgs/ninja.png";

export default function ResultCard(props) {
  const skill =
    props.skills.map((skill) => <p className="skill">{skill}</p>) || "";
  return (
    <Link to={`/Business/Results/${props.id}`}>
        <section className="result-card-container">
        <section className="result-card">
            <h5 className="result-card-header">{props.name}</h5>

            <article className="result-card-image-container">
            <img className="result-image" src={ninja} alt="result" />
            </article>
            <article className="result-card-rating">
            <p>
                Rating: <span className="rating">{props.rating}</span>
            </p>
            </article>
            <article className="skills">{skill}</article>
        </section>
        </section>
    </Link>
  );
}
