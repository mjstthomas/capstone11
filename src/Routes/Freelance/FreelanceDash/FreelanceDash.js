import React from 'react';
import {useState, useContext} from 'react';
import LargeButton from '../../../Components/Utilities/LargeButton/LargeButton';
import AppContext from '../../../AppContext';
import Header from '../../../Components/Header/Header';
import './FreelanceDash.css';

export default function FreelanceDash(props){
    const context = useContext(AppContext)

    return (
        <section className="Freelance-dash-container">
            <Header />
            <h1>{context.user.nickname}'s Dashboard</h1>
            <article className="FL-btn-container">
                <LargeButton name="Offers" onClick={()=> props.history.push('/Freelancer/OffersPage')} />
            </article>
            <article className="FL-btn-container">
                <LargeButton name="Messages" onClick={()=> console.log('push to messages')} />
            </article>
        </section>
    )
}