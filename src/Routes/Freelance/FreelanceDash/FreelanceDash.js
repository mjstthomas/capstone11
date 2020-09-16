import React from 'react';
import {useState, useContext} from 'react';
import LargeButton from '../../../Components/Utilities/LargeButton/LargeButton';
import AppContext from '../../../AppContext'
import './FreelanceDash.css';

export default function FreelanceDash(props){
    const context = useContext(AppContext)

    return (
        <section className="Freelance-dash-container">
            <h1>{context.user.nickname}'s Dashboard</h1>
            <article className="FL-btn-container">
                <LargeButton name="Offers" onClick={context.testContext} />
            </article>
            <article className="FL-btn-container">
                <LargeButton name="Messages" onClick={()=> console.log('push to messages')} />
            </article>
        </section>
    )
}