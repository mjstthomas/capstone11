import React from 'react';
import {useState, useContext} from 'react';
import AppContext from '../AppContext'
import './login.css';
import { Link } from 'react-router-dom';


function Login(props){
const context = useContext(AppContext);

const [user, setUser] = useState({
    userName: '',
    password: ''
});
const [error, setError] = useState(context.error);

const handleSignIn = event =>{
    let name = event.target.name;
    let value = event.target.value;
    let {userName, password} = user;
    let newUser = {userName, password};
    newUser[name] = value;
    setUser(newUser);
    console.log(newUser)
};
const handlePush = () =>{
    setTimeout(()=>{
        if(context.user.profile === true){
            console.log(context.user)
            props.history.push('/Freelancer')
        }
        if(context.user.profile === false){
            console.log(context.user)
            props.history.push('/Business')
        }
    }, 2000)
}
const handleSubmit = event =>{
    event.preventDefault();
    if (user.userName.length < 1 || user.password.password < 1){
        setTimeout(()=>{
            setError(context.error)
        }, 2000)
        return setError('UserName and Password must be filled out')

    }
    const newUser = context.signInUser(user);
    if(newUser.profile === true){
        console.log(context.user)
        props.history.push('/Freelancer')
    }
    if(newUser.profile === false){
        console.log(context.user)
        props.history.push('/Business')
    }
}
        return (
            <section className="login-container">
                <h1>Log In</h1>
                <p>Need an account? <Link to='/SignUp'>Sign up!</Link></p>
                <form className="login-form" onSubmit={handleSubmit}>
                    <article className="input-container">
                        <label htmlFor="username">Username:</label>
                        <br/>
                        <input className="login-input" name="userName" onChange={handleSignIn} />
                        <br/>
                    </article>
                    <article className="input-container">
                        <label htmlFor="password">Password:</label>
                        <br/>
                        <input className="login-input" name="password" onChange={handleSignIn}/>
                    </article>
                    <article className="login-btn-container">
                        <button className="login-btn">Log in</button>
                    </article>
                </form>
                <p className="red">{error}</p>
            </section>
        )
}

export default Login;