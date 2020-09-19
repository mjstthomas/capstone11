import React from "react";
import { useState, useContext } from "react";
import AppContext from "../AppContext";
import "./signup.css";
import SmallButton from "../Components/Utilities/SmallButton/SmallButton";

export default function SignUp(props) {
  const [businessType, setBusinessType] = useState("");
  const [error, setError] = useState("");
  const [signUp, setSignUp] = useState({
    nickname: "",
    fullName: "",
    password: "",
    profile: businessType,
  });
  const context = useContext(AppContext);

  const handleBusinessType = (event) => {
    const value = event.target.value;
    return setBusinessType(value);
  };
  const clearError = () => {
    setTimeout(() => {
      setError("");
    }, 3000);
  };
  const handleSignIn = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    let { nickname, password, profile, fullName } = signUp;
    let newUser = { nickname, password, fullName, profile };
    newUser[name] = value;
    console.log(signUp);
    setSignUp(newUser);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (signUp.nickname.length < 7) {
      clearError();
      return setError("Name must be at least 7 characters long");
    }
    if (signUp.password.length < 7) {
      clearError();
      return setError("Password must be at least 7 characters long");
    }
    if (signUp.profile.length < 4) {
      clearError();
      return setError("You must choose a profile type");
    }
    const newUser = context.signUpUser(signUp);
    if (newUser.profile === true) {
      props.history.push("/SignUp/FLDetails");
    } else {
      props.history.push("/SignUp/BizDetails");
    }
  };
  return (
    <section className="signup-container">
      <h1>Sign Up</h1>
      <p className="red">{error}</p>
      <form className="signup-form" onSubmit={handleSubmit}>
        <article className="input-container">
          <label htmlFor="userName">Username:</label>
          <br />
          <input
            name="nickname"
            className="signup-input"
            onChange={handleSignIn}
          />
          <br />
        </article>
        <article className="input-container">
          <label htmlFor="fullName">Full Name:</label>
          <br />
          <input
            name="fullName"
            className="signup-input"
            onChange={handleSignIn}
          />
          <br />
        </article>
        <article className="input-container">
          <label htmlFor="password">Password:</label>
          <br />
          <input
            name="password"
            className="signup-input"
            onChange={handleSignIn}
          />
          <br />
        </article>
        <article className="radio-container">
          <label htmlFor="businessType">I prefer to be a:</label>
          <br />
          <input
            type="radio"
            className="radio-input"
            name="profile"
            value="Freelancer"
            checked={businessType === "Freelancer"}
            onClick={handleBusinessType}
            onChange={handleSignIn}
          />
          <label htmlFor="Freelancer">Freelancer</label>
          <br />
          <input
            type="radio"
            className="radio-input"
            name="profile"
            value="Business"
            checked={businessType === "Business"}
            onClick={handleBusinessType}
            onChange={handleSignIn}
          />
          <label htmlFor="Business">Business</label>
        </article>
        <article className="signup-btn-container">
          <SmallButton
            className="btns"
            buttonStyle="btn-outline"
            buttonSize="btn-large"
            type="submit"
            onClick={() => props.history.push("/login")}
          >
            Add Details
          </SmallButton>
        </article>
      </form>
    </section>
  );
}
