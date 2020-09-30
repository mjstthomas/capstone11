import React from "react";
import { Route } from "react-router-dom";
import LandingPage from "./Routes/LandingPage";
import SignUp from "./Routes/signup";
import Login from "./Routes/login";
import FLDetailForm from "./Routes/Freelance/FLProfileDetsForm/FLDetsForm";
import BizDetailForm from "./Routes/Business/BizProfileDetsForm/BizDetsForm";
import BizDash from "./Routes/Business/BizDash/BizDash";
import Search from "./Routes/Business/Search/Search";
import Results from "./Routes/Business/Results/Results";
import BizProfile from "./Routes/Business/BizProfile/BizProfile";
import FLProfile from "./Routes/Freelance/FLProfile/FLProfile";
import MakeOffer from "./Routes/Business/MakeOffer/MakeOffer";
import BusinessOffersPage from "./Routes/Business/BusinessOffers/BusinessOffersPage";
import FreelanceOffersPage from "./Routes/Freelance/FreelanceOffers/FreelanceOffersPage";
import Messaging from "./Routes/Messaging/Messaging";
import userArray from "./userArray";
import searchArray from "./searchArray";
import AppContext from "./AppContext";
import AuthApiService from "./services/AuthApiService";
import ApiService from "./services/ApiService";
import TokenService from "./services/TokenService";
import "./App.css";
import businessOffers from "./businessOffersArray";

class App extends React.Component {
  state = {
    user: {
      id: 2,
      nickname: "Test",
      profile: true,
      work: [],
      skills: [{ level: "", skill: "" }],
    },
    userProfile: false,
    headerToggle: false,
    isNav: false,
    userArray: [...userArray],
    searchArray: [...searchArray],
    resultArray: [],
    MustHaveSkills: [{ level: "", skill: "" }],
    NiceToHaveSkills: [{ level: "", skill: "" }],
    error: "",
    businessOffers: businessOffers,
  };

  //Sign in / Sign Up functions

  signInUser = (user) => {
    const signedUser = {
      nickname: user.nickname,
      password: user.password
    }

   return AuthApiService.postLogin(signedUser)
    .then(res => {
      TokenService.saveAuthToken(res.authToken)
      console.log(res.profile)
      this.setState({userProfile: res.profile})
      return ApiService.importUser(res.id)
        .then(result => result.json())
        .then(result => {
          console.log(result)
          this.setState({user: result})
        })
    })
  }

  signUpUser = (user) => {
    if (user.profile === "Freelancer") {
      user.profile = true;
    } else {
      user.profile = false;
    }
    this.setState({ user: user });
    return user;
  };

  //search result functions

  handleResult = (result) => {
    const searchedSkillsArray = () => {
      const array = [];
      for (let i = 0; i < this.state.MustHaveSkills.length; i++) {
        array.push(this.state.MustHaveSkills[i].skill);
      }
      return array;
    };

    const newArray = searchedSkillsArray();
    const newSearchArray = [...searchArray];
    const searchResult = newSearchArray.filter((item) =>
      newArray.some((ai) => item.skills.includes(ai))
    );
    this.setState({ resultArray: searchResult });
  };

  //Skill Search Functions

  deleteSkill = (skill) => {
    const mustHave = this.state.MustHaveSkills;
    const niceToHave = this.state.NiceToHaveSkills;
    let allSkills = mustHave;
    if (niceToHave.length > 0 && niceToHave[0].skill !== "") {
      allSkills = mustHave.concat(niceToHave);
    }
    const filteredSkillList = allSkills.filter((item) => item.skill !== skill);
    const newSkills = [...filteredSkillList];
    this.setState({
      MustHaveSkills: newSkills,
      NiceToHaveSkills: [{ level: "", skill: "" }],
    });
  };
  setLevel = (level, index, typeOfSkill) => {
    const prevState = { ...this.state.user };
    prevState[typeOfSkill][index].level = level;
    this.setState({ user: prevState });
  };

  searchLevel = (level, index, typeOfSkill) => {
    const prevState = { ...this.state };
    prevState[typeOfSkill][index].level = level;
    this.setState({ user: prevState });
  };

  setSkill = (skill, index, typeOfSkill) => {
    const prevState = { ...this.state.user };
    prevState[typeOfSkill][index].skill = skill;
    this.setState({ user: prevState });
  };

  searchSkill = (skill, index, typeOfSkill) => {
    const prevState = { ...this.state };
    prevState[typeOfSkill][index].skill = skill;
    this.setState({ prevState });
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

  resetSkills = () => {
    this.setState({
      MustHaveSkills: [{ level: "", skill: "" }],
      NiceToHaveSkills: [{ level: "", skill: "" }],
    });
  };

  // handle featured work
  addWork = (newURL) => {
    const prevState = { ...this.state };
    prevState.user.work.push(newURL);
    this.setState(prevState);
    setTimeout(() => console.log(this.state.user), 2000);
  };

  removeWork = (index) => {
    const prevState = { ...this.state };
    prevState.user.work.splice(index, 1);
    this.setState(prevState);
  };

  // handle Header

  setHeaderToggle = () => {
    const prevState = { ...this.state };
    prevState.headerToggle = !prevState.headerToggle;
    this.setState(prevState);
  };

  setNav = () => {
    const prevState = { ...this.state };
    prevState.isNav = !prevState.isNav;
    this.setState(prevState);
  };

  // make offer functions

  handleMakeOffer = (offer) => {
    const newArray = [...this.state.businessOffers, offer];
    this.setState({ businessOffers: newArray });
    console.log(offer);
    console.log(newArray);
  };
  render(props) {
    let context = {
      user: this.state.user,
      userProfile: this.state.userProfile,
      work: this.state.work,
      headerToggle: this.state.headerToggle,
      isNav: this.state.isNav,
      AddSkills: this.state.AddSkills,
      MustHaveSkills: this.state.MustHaveSkills,
      NiceToHaveSkills: this.state.NiceToHaveSkills,
      resultArray: this.state.resultArray,
      businessOffers: this.state.businessOffers,
      signInUser: this.signInUser,
      signUpUser: this.signUpUser,
      resetSkills: this.resetSkills,
      removeSkill: this.removeSkill,
      deleteSkill: this.deleteSkill,
      addSkill: this.addSkill,
      searchSkill: this.searchSkill,
      setSkill: this.setSkill,
      setLevel: this.setLevel,
      searchLevel: this.searchLevel,
      addWork: this.addWork,
      removeWork: this.removeWork,
      setHeaderToggle: this.setHeaderToggle,
      setNav: this.setNav,
      handleResult: this.handleResult,
      handleMakeOffer: this.handleMakeOffer,
      error: this.state.error,
    };

    return (
      <AppContext.Provider value={context}>
        <div className="App">
          <Route path="/" exact component={LandingPage} />
          <Route path="/SignUp" exact component={SignUp} />
          <Route path="/Login" exact component={Login} />
          <Route path="/SignUp/FLDetails" exact component={FLDetailForm} />
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
            path="/Business/BusinessOffersPage"
            exact
            component={BusinessOffersPage}
          />
          <Route path="/Freelancer" exact component={FreelanceOffersPage} />

          <Route
            path="/Messaging/:senderID/:recipientID"
            exact
            component={Messaging}
          />
        </div>
      </AppContext.Provider>
    );
  }
}

export default App;
