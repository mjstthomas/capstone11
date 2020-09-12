import React from 'react';
import LargeButton from '../Components/Utilities/LargeButton/LargeButton'
import ConfirmButton from '../Components/Utilities/ConfirmButton/ConfirmButton'
import DenyButton from '../Components/Utilities/DenyButton/DenyButton'
import './login.css';
import { Link } from 'react-router-dom';


function Login(props){

const handleSubmit = event =>{
    event.preventDefault()
}
        return (
            <section className="login-container">
                <h1>Log In</h1>
                <p>Need an account? <Link to='SignUp'>Sign up!</Link></p>
                <form className="login-form" onSubmit={handleSubmit}>
                    <article className="input-container">
                        <label htmlFor="username">Username:</label>
                        <br/>
                        <input className="login-input" />
                        <br/>
                    </article>
                    <article className="input-container">
                        <label htmlFor="password">Password:</label>
                        <br/>
                        <input className="login-input" />
                    </article>
                    <article className="login-btn-container">
                        <DenyButton onClick={()=> console.log('hello')}/>
                    </article>
                </form>
            </section>
        )
}

export default Login;