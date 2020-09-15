import React from 'react';
import LargeButton from '../../../Components/Utilities/LargeButton/LargeButton';
import './BizDash.css';

export default function BizDash(props){

    return (
        <section className="business-dash-container">
            <h2>Business Dashboard</h2>
            <article className="BD-btn-container">
                <LargeButton name="Look For a Freelancer" onClick={()=> props.history.push('/Business/Search')} />
            </article>
            <article className="BD-btn-container">
                <LargeButton name="Your Offers" onClick={()=> console.log('push to list of offers')} />
            </article>
            <article className="BD-btn-container">
                <LargeButton name="Messages" onClick={()=> console.log('push to messages')} />
            </article>
        </section>
    )
}