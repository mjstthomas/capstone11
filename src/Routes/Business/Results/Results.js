import React from 'react';
import {useState, useContext} from 'react';
import AppContext from '../../../AppContext';
import SkillButton from '../../../Components/Utilities/SkillButton/SkillButton';
import Header from '../../../Components/Header/Header';
import ResultCard from './components/ResultCard';
import './Results.css';


export default function Results(props){
    const context = useContext(AppContext)

    const deleteSkill = event =>{
        let name = event.target.name;
        context.deleteSkill(name);
        setTimeout(()=>{
            context.handleResult();
        }, 1000);
    };

    

    
    const skills = context.MustHaveSkills.map(item => <SkillButton skill={item.skill} name={item.skill} onClick={deleteSkill} />)
    const results = context.resultArray.map(item =>{
        console.log(item);
        return <ResultCard name={item.nickname} skills={item.skills} rating={item.rating} />
    });

    return (
        <section className="result-container">
            <Header />
            <article className="skills-container">
                {skills}
                <button className="BTS-btn" onClick={()=> props.history.push('/Business/Search')}>
                    <i class="fas fa-undo"></i>
                </button>
            </article>
            <article className="results">
                {results}
            </article>
        </section>
    )
}