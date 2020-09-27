import React from "react";
import { useState, useContext } from "react";
import TokenService from '../services/TokenService'
import AppContext from "../AppContext";
import "./login.css";
import { Link } from "react-router-dom";
import SmallButton from "../Components/Utilities/SmallButton/SmallButton";

function Login(props) {
  const context = useContext(AppContext);

  const [user, setUser] = useState({
    nickname: "",
    password: "",
  });
  const [error, setError] = useState(context.error);

  const handleSignIn = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    let { nickname, password } = user;
    let newUser = { nickname, password };
    newUser[name] = value;
    setUser(newUser);
    
  };
  const handlePush = () => {
    console.log('clicked')
    setTimeout(() => {
      console.log('timed')
      if (context.userProfile == true) {
        
        props.history.push("/Freelancer");
      }
      if (context.userProfile == false) {
        
        props.history.push("/Business");
      }
    }, 500);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (user.nickname.length < 1 || user.password.length < 1) {
      setTimeout(() => {
        setError(context.error);
      }, 2000);
      return setError("UserName and Password must be filled out");
    }

    
    context.signInUser(user);
    
  };
  return (
    <section className="login-container">
      <h1>Log In</h1>
      <p>
        Need an account? <Link to="/SignUp">Sign up!</Link>
      </p>
      <p className="red">{error}</p>
      <form className="login-form" onSubmit={handleSubmit}>
        <article className="input-container">
          <label htmlFor="username">Username:</label>
          <br />
          <input
            className="login-input"
            name="nickname"
            onChange={handleSignIn}
          />
          <br />
        </article>
        <article className="input-container">
          <label htmlFor="password">Password:</label>
          <br />
          <input
            className="login-input"
            name="password"
            onChange={handleSignIn}
          />
        </article>
        <article className="login-btn-container">
          <SmallButton
            className="btn"
            buttonStyle="btn-outline"
            buttonSize="btn-large"
            type="submit"
            onClick={() => handlePush()}
          >
            Log In
          </SmallButton>
        </article>
      </form>
    </section>
  );
}

export default Login;
