import React from 'react';
import LargeButton from '../Components/Utilities/LargeButton/LargeButton'
import './login.css';
import { Link } from 'react-router-dom';


class Login extends React.Component {


handleSubmit = event =>{
    event.preventDefault()
}
    render(){
        return (
            <section className="login-container">
                <h1>Log In</h1>
                <p>Need an account? <Link to='SignUp'>Sign up!</Link></p>
                <form className="login-form" onSubmit={this.handleSubmit}>
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
                        <button className="login-btn">Log In</button>
                    </article>
                </form>
            </section>
        )
    }
}

export default Login;