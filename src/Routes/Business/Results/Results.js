import React from 'react';
import {useState, useContext} from 'react';
import AppContext from '../../../AppContext';
import SkillButton from '../../../Components/Utilities/SkillButton/SkillButton';
import './Results.css';

export default function Results(props){
    const context = useContext(AppContext)

    const deleteSkill = event =>{
        let name = event.target.name;
        console.log(name)
        context.deleteSkill(name);
    }


    const skills = context.MustHaveSkills.map(item => <SkillButton skill={item.skill} name={item.skill} onClick={deleteSkill} />)
    return (
        <section className="result-container">
            <article className="skills-container">
                {skills}
            </article>
        </section>
    )
}