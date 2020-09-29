import React from "react";
import { useState, useContext } from "react";
import "./signup.css";
import Header from "../Components/Header/Header";
import SmallButton from "../Components/Utilities/SmallButton/SmallButton";
import AuthApiService from "../services/AuthApiService";
import AppContext from "../AppContext";

export default function SignUp(props) {
  const context = useContext(AppContext);

  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState("");

  const clearError = () => {
    setTimeout(() => {
      setError("");
    }, 3000);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (nickname.length < 7) {
      clearError();
      return setError("Name must be at least 7 characters long");
    }
    if (password.length < 7) {
      clearError();
      return setError("Password must be at least 7 characters long");
    }
    if (profile === null) {
      clearError();
      return setError("You must choose a profile type");
    }
    const newUser = {
      nickname: nickname,
      password: password,
      profile: profile,
    };
    AuthApiService.postUser(newUser).then((res) =>
      !res.ok
        ? setError("Something went wrong")
        : context
            .signInUser({ nickname: nickname, password: password })
            .then(
              profile
                ? props.history.push("/SignUp/FLDetails")
                : props.history.push("/SignUp/BizDetails")
            )
    );
  };
  return (
    <main className="signup-container">
      <Header />
      <h1>Sign Up</h1>
      <p className="red">{error}</p>
      <form className="signup-form" onSubmit={handleSubmit}>
        <article className="input-container">
          <label htmlFor="userName">Username:</label>
          <br />
          <input
            name="nickname"
            type="text"
            className="signup-input"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
          <br />
        </article>
        <article className="input-container">
          <label htmlFor="password">Password:</label>
          <br />
          <input
            name="password"
            type="password"
            className="signup-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
        </article>
        <article className="radio-container">
          <label htmlFor="businessType">I prefer to be a:</label>
          <br />
          <input
            type="radio"
            className="radio-input"
            id="Freelancer"
            name="profile"
            value={true}
            onChange={(e) => setProfile(e.target.value)}
          />
          <label htmlFor="Freelancer">Freelancer</label>
          <br />
          <input
            type="radio"
            className="radio-input"
            name="profile"
            id="Business"
            value={false}
            onChange={(e) => setProfile(e.target.value)}
          />
          <label htmlFor="Business">Business</label>
        </article>
        <article className="signup-btn-container">
          <SmallButton
            className="btn"
            buttonStyle="btn-outline"
            buttonSize="btn-large"
            type="submit"
            onSubmit={() => handleSubmit}
          >
            Add Details
          </SmallButton>
        </article>
      </form>
    </main>
  );
}
