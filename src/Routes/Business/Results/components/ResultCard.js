import React from 'react';
import './ResultCard.css';

export default function ResultCard(props){
    console.log(props.skills)
    const skill = props.skills.map(skill => <p className="skill">{skill}</p>) || '';
    return (
        <section className="result-card-container">
            <section className="result-card">
                
                    <h5>{props.name}</h5>
                
                <article className="result-card-image-container">

                </article>
                <article className="result-card-rating">
                    <p>Rating: <span className="rating">{props.rating}</span></p>
                </article>
                <article className="skills">
                    {skill}
                </article>
            </section>

        </section>
    )
}