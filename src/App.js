import React from "react";
import { Route } from "react-router-dom";
import LandingPage from "./Routes/LandingPage";
import SignUp from "./Routes/signup";
import Login from "./Routes/login";
import FLDetailForm from "./Routes/Freelance/FLProfileDetsForm/FLDetsForm";
import BizDetailForm from "./Routes/Business/BizProfileDetsForm/BizDetsForm";
import BizDash from "./Routes/Business/BizDash/BizDash";
import Search from "./Routes/Business/Search/Search";
<<<<<<< HEAD
import Results from "./Routes/Business/Results/Results";
=======
import Results from './Routes/Business/Results/Results';
>>>>>>> c55907a2786d25c2ead27d802d5bb429eed9f447
import BizProfile from "./Routes/Business/BizProfile/BizProfile";
import FLProfile from "./Routes/Freelance/FLProfile/FLProfile";
import MakeOffer from "./Routes/Business/MakeOffer/MakeOffer";
import BizOffersDash from "./Routes/Business/BizOffersDash/BizOffersDash";
import FreelanceDash from "./Routes/Freelance/FreelanceDash/FreelanceDash";
import OffersPage from "./Routes/Freelance/FreelanceOffersPage";
import Offer from "./Routes/Freelance/Offer/Offer";
import Messaging from "./Routes/Messaging/Messaging";
import userArray from "./userArray";
import searchArray from './searchArray';
import AppContext from "./AppContext";
import "./App.css";

class App extends React.Component {
  state = {
    user: { profile: true },
    userArray: [...userArray],
    searchArray: [...searchArray],
    resultArray: [],
    AddSkills: [{ level: "", skill: "" }],
    MustHaveSkills: [{ level: "", skill: "" }],
    NiceToHaveSkills: [{ level: "", skill: "" }],
    error: "",
  };

  //Sign in / Sign Up functions
  signInUser = (user) => {
    let newUser = this.state.userArray.find(
      (item) => user.userName == item.nickname && user.password == item.password
    );
    if (newUser == null) {
      return this.setState({ error: "User Not Found" });
    }
    this.setState({ user: newUser });
    return newUser;
  };

  signUpUser = (user) => {
    user.id = this.state.userArray.length;
    if (user.profile === "Freelancer") {
      user.profile = true;
    } else {
      user.profile = false;
    }
    const newUserArray = [...this.state.userArray, user];
    console.log(newUserArray);
    this.setState({ userArray: newUserArray });
    return user;
  };
  //search result functions
  handleResult = result =>{
    const searchedSkillsArray = () =>{
      const array = [];
      for (let i = 0; i < this.state.MustHaveSkills.length; i++){
        array.push(this.state.MustHaveSkills[i].skill)
      }
      return array;
    }
    
    const newArray = searchedSkillsArray();
    const newSearchArray = [...this.state.searchArray];
    const searchResult = newSearchArray.filter(item => newArray.some(ai => item.skills.includes(ai)));
    this.setState({resultArray: searchResult})
  }
  //Skill Search Functions
  deleteSkill = (skill) =>{
    const filteredSkillList = this.state.MustHaveSkills.filter(item => item.skill !== skill);
    const newSkills = [...filteredSkillList];
    this.setState({MustHaveSkills: newSkills});
  }
  setLevel = (level, index, typeOfSkill) => {
    const prevState = { ...this.state };
    prevState[typeOfSkill][index].level = level;
    this.setState(prevState);
  };

  setSkill = (skill, index, typeOfSkill) => {
    const prevState = { ...this.state };
    prevState[typeOfSkill][index].skill = skill;
    this.setState(prevState);
  };

  addSkill = (skill) => {
    const prevState = { ...this.state };
    prevState[skill].push({ level: "", skill: "" });
    this.setState(prevState);
  };

  removeSkill = (index, typeOfSkill) => {
    const prevState = { ...this.state };
    prevState[typeOfSkill].splice(index, 1);
    this.setState(prevState);
  };

  
  render(props) {
    let context = {
      user: this.state.user,
      AddSkills: this.state.AddSkills,
      MustHaveSkills: this.state.MustHaveSkills,
      NiceToHaveSkills: this.state.NiceToHaveSkills,
      resultArray: this.state.resultArray,
      signInUser: this.signInUser,
      signUpUser: this.signUpUser,
      removeSkill: this.removeSkill,
      deleteSkill: this.deleteSkill,
      addSkill: this.addSkill,
      setSkill: this.setSkill,
      setLevel: this.setLevel,
      handleResult: this.handleResult,
      error: this.state.error,
    };

    return (
      <AppContext.Provider value={context}>
        <div className="App">
          <Route path="/" exact component={LandingPage} />
          <Route path="/SignUp" exact component={SignUp} />
          <Route path="/Login" exact component={Login} />
          <Route path="/SignUp/FLDetails" component={FLDetailForm} />
          <Route path="/SignUp/BizDetails" component={BizDetailForm} />
          <Route path="/Business" exact component={BizDash} />
          <Route path="/Business/Search" component={Search} />
          <Route path="/Business/Profile/:businessID" component={BizProfile} />
          <Route
            path="/Freelancer/Profile/:freelanceID"
            component={FLProfile}
          />
          <Route path="/Business/Results" exact component={Results} />
          <Route
            path="/Business/Results/:freelanceID"
            exact
            component={FLProfile}
          />
          <Route
            path="/Business/Results/:freelanceID/MakeOffer"
            exact
            component={MakeOffer}
          />
          <Route
            path="/Business/BizOffersDash"
            exact
            component={BizOffersDash}
          />
          <Route path="/Freelancer" exact component={FreelanceDash} />
          <Route path="/Freelancer/OffersPage" exact component={OffersPage} />
          <Route
            path="/Freelancer/OffersPage/:offerId"
            exact
            component={Offer}
          />
          <Route
            path="/Messaging/:senderID/:recepientID"
            exact
            component={Messaging}
          />
        </div>
      </AppContext.Provider>
    );
  }
}

export default App;
