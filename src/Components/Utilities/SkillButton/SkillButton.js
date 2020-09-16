import React from 'react';
import './SkillButton.css';

export default function SkillButton(props){

    return (
        <section className="skill-btn-container">
            <article className="skill-btn" name={props.name}>{props.skill}<button name={props.name} className="fas fa-times delete" onClick={props.onClick}></button></article>
        </section>
    )
}