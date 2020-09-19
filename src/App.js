import React from "react";
import { Route , Switch } from "react-router-dom";
import LandingPage from "./Routes/LandingPage";
import SignUp from "./Routes/signup";
import Login from "./Routes/login";
import FLDetailForm from "./Routes/Freelance/FLProfileDetsForm/FLDetsForm";
import BizDetailForm from "./Routes/Business/BizProfileDetsForm/BizDetsForm";
import BizDash from "./Routes/Business/BizDash/BizDash";
import Search from "./Routes/Business/Search/Search";
// import Results from './Routes/Business/Results';
import BizProfile from "./Routes/Business/BizProfile/BizProfile";
import FLProfile from "./Routes/Freelance/FLProfile/FLProfile";
// import MakeOffer from './Routes/Business/MakeOffer';
// import BizOffersDash from './Routes/Business/BizOffersDash';
import FreelanceDash from "./Routes/Freelance/FreelanceDash/FreelanceDash";
// import OffersPage from './Routes/Freelance/OffersPage';
// import Offer from './Routes/Freelance/Offer';
import Messaging from "./Routes/Messaging/Messaging";
import userArray from "./userArray";
import AppContext from "./AppContext";
import "./App.css";
import NotFoundPage from './Routes/NotFoundPage'
import PictureUpload from './Components/PictureUpload/PictureUpload'

class App extends React.Component {
  state = {
    user: { profile: true },
    userArray: [...userArray],
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
  };
  //Skill Search Functions
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

  addSkill = (e) => {
    let typeOfSkill =
      e.target.parentNode.parentNode.parentNode.childNodes[0].childNodes[0]
        .innerHTML;
    typeOfSkill = typeOfSkill.split(" ").join("");
    const prevState = { ...this.state };
    prevState[typeOfSkill].push({ level: "", skill: "" });
    this.setState(prevState);
  };

  removeSkill = (index, typeOfSkill) => {
    const prevState = { ...this.state };
    prevState[typeOfSkill].splice(index, 1);
    this.setState(prevState);
  };

  testContext = () => {
    console.log("well it worked");
  };
  render(props) {
    let context = {
      user: this.state.user,
      AddSkills: this.state.AddSkills,
      MustHaveSkills: this.state.MustHaveSkills,
      NiceToHaveSkills: this.state.NiceToHaveSkills,
      signInUser: this.signInUser,
      signUpUser: this.signUpUser,
      removeSkill: this.removeSkill,
      addSkill: this.addSkill,
      setSkill: this.setSkill,
      setLevel: this.setLevel,
      error: this.state.error,
    };

    return (
      <AppContext.Provider value={context}>
        <div className="App">
          <Switch>
          <Route exact path="/" exact component={LandingPage} />
          <Route path="/SignUp" exact component={SignUp} />
          <Route path="/Login" exact component={Login} />
          <Route path="/SignUp/FLDetails" component={FLDetailForm} />
          <Route path="/SignUp/BizDetails" component={BizDetailForm} />
          <Route path="/Business" exact component={BizDash} />
          <Route path="/upload" exact component={PictureUpload} />
          <Route path="/Business/Search" component={Search} />
          <Route path="/Business/Profile/:businessID" component={BizProfile} />
          <Route
            path="/Freelancer/Profile/:freelanceID"
            component={FLProfile}
          />

          <Route path="/" component={NotFoundPage} />

          {/* <Route path='/Business/Results' exact component={Results} />
        <Route path='/Business/Results/:freelanceID' exact component={FLProfile} />
        <Route path='/Business/Results/:freelanceID/MakeOffer' exact component={MakeOffer} />
            <Route path='/Business/BizOffersDash' exact component={BizOffersDash} />*/}
          <Route path="/Freelancer" exact component={FreelanceDash} />
          {/*<Route path='/Freelancer/OffersPage' exact component={OffersPage} />
        <Route path='/Freelancer/OffersPage/:offerId' exact component={Offer} /> */}
          <Route
            path="/Messaging/:senderID/:recepientID"
            exact
            component={Messaging}
          />
          </Switch>
        </div>
      </AppContext.Provider>
    );
  }
}

export default App;
