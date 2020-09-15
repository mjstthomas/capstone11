import React from 'react';
import './SkillButton.css';

export default function SkillButton(props){

    return (
        <section className="skill-btn-container">
            <article className="skill-btn">{props.skill}<i className="fas fa-times delete" onClick={props.onClick}></i></article>
        </section>
    )
}