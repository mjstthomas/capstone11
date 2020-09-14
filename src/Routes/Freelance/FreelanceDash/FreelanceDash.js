import React from 'react';
import LargeButton from '../../../Components/Utilities/LargeButton/LargeButton';
import './FreelanceDash.css';

export default function FreelanceDash(props){

    return (
        <section className="Freelance-dash-container">
            <h1>Freelancer Dashboard</h1>
            <article className="FL-btn-container">
                <LargeButton name="Offers" onClick={()=> console.log('push to list of offers')} />
            </article>
            <article className="FL-btn-container">
                <LargeButton name="Messages" onClick={()=> console.log('push to messages')} />
            </article>
        </section>
    )
}