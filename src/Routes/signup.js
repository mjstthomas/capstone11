import React from 'react';
import {useState, useContext} from 'react'
import './signup.css';

export default function SignUp(props){
    const [businessType, setBusinessType ] = useState('');

    const handleBusinessType = event =>{
        const value = event.target.value
        return setBusinessType(value)
    }
    return (
        <section className="signup-container">
            <h1>Sign Up</h1>
            <form className="signup-form">
                <article className="input-container">
                    <label htmlFor="userName">Username:</label>
                    <br/>
                    <input name="userName" className="signup-input"/>
                    <br/>
                </article>
                <article className="input-container">
                    <label htmlFor="fullName">Full Name:</label>
                    <br/>
                    <input name="fullName" className="signup-input"/>
                    <br/>
                </article>
                    <article className="input-container">
                    <label htmlFor="password">Password:</label>
                    <br/>
                    <input name="password" className="signup-input"/>
                    <br/>
                </article>
                <article className="input-container">
                    <label htmlFor="nickName">Nickname:</label>
                    <br/>
                    <input name="nickName" className="signup-input"/>
                    <br/>
                </article>
                <article className="radio-container">
                    <label htmlFor="businessType">I prefer to be a:</label>
                    <br/>
                    <input type="radio" className="radio-input" name="Freelancer" value="Freelancer" checked={businessType === 'Freelancer'} onChange={handleBusinessType}/>
                    <label htmlFor="Freelancer">Freelancer</label>
                    <br/>
                    <input type="radio" className="radio-input" name ="Business" value="Business" checked={businessType === 'Business'} onChange={handleBusinessType}/>
                    <label htmlFor="Business">Business</label>
                </article>
                <article className="signup-btn-container">
                    <button className="signup-btn">Sign up</button>
                </article>
            </form>
        </section>
    )
}