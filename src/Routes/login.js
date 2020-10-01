import React from "react";
import { useState, useContext } from "react";
import TokenService from "../services/TokenService";
import AppContext from "../AppContext";
import "./login.css";
import { Link } from "react-router-dom";
import Header from "../Components/Header/Header";
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

  const handleSubmit = (event) => {
    event.preventDefault();
    if (user.nickname.length < 1 || user.password.length < 1) {
      setTimeout(() => {
        setError(context.error);
      }, 2000);
      return setError("UserName and Password must be filled out");
    }

    context.signInUser(user);
    setTimeout(() => {
      if (context.userProfile === true) {
        props.history.push("/Freelancer");
      }
      if (context.userProfile === false) {
        props.history.push("/Business");
      }
    }, 2000);

    // const newUser = context.signInUser(user);
    // setTimeout(() => {
    //   if (newUser.profile === true) {
    //     props.history.push("/Freelancer");
    //   }
    //   if (newUser.profile === false) {
    //     props.history.push("/Business");
    //   }
    // }, 1000);
  };
  return (
    <main className="login-container">
      <Header />
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
            type="text"
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
            type="password"
            onChange={handleSignIn}
          />
        </article>
        <article className="login-btn-container">
          <SmallButton
            className="btn"
            buttonStyle="btn-outline"
            buttonSize="btn-large"
            type="submit"
            onSubmit={() => props.history.push("/login")}
          >
            Log In
          </SmallButton>
        </article>
      </form>
    </main>
  );
}

export default Login;
